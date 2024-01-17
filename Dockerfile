# First stage: Build the application
FROM maven:3.8.4-openjdk-17 AS build

# Download and install Node.js
RUN curl -sL https://nodejs.org/dist/v20.10.0/node-v20.10.0-linux-x64.tar.gz | tar -xz -C /usr/local --strip-components=1
RUN npm install -g yarn

WORKDIR /usr/src/app
COPY pom.xml .
COPY src ./src

RUN mvn package

# Second stage: Create the final image
FROM registry.access.redhat.com/ubi8/openjdk-17:1.18

ENV LANGUAGE='en_US:en'

COPY --chown=185 --from=build /usr/src/app/target/quarkus-app/lib/ /deployments/lib/
COPY --chown=185 --from=build /usr/src/app/target/quarkus-app/*.jar /deployments/
COPY --chown=185 --from=build /usr/src/app/target/quarkus-app/app/ /deployments/app/
COPY --chown=185 --from=build /usr/src/app/target/quarkus-app/quarkus/ /deployments/quarkus/

# Copy Node.js from the first stage
COPY --from=build /usr/local/bin/node /usr/local/bin/

EXPOSE 8080
USER 185
ENV JAVA_OPTS_APPEND="-Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager"
ENV JAVA_APP_JAR="/deployments/quarkus-run.jar"

ENTRYPOINT [ "/opt/jboss/container/java/run/run-java.sh" ]
