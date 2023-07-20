FROM ubuntu:22.04
ARG TOKEN
ARG USERNAME
ENV GITHUB_TOKEN ${TOKEN}
ENV  GITHUB_USERNAME ${USERNAME}
ENV GITHUB_PROJECT_URL https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/mehrab-alam/dacusaurus-project.git
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN apt-get update
RUN apt-get install curl -y
RUN curl -s https// deb.nodesource.com/setup_18.x | bash
RUN apt-get install git -y
RUN apt-get install nodejs -y
RUN git clone $GITHUB_PROJECT_URL
EXPOSE 3000
COPY /entrypoint.sh /entrypoint.sh
RUN chmod +x entrypoint.sh 
CMD ["/entrypoint.sh"]

