pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        checkout scm // important so it doesnt always checkout to master
        export NODE_ENV="development"
        npm install -g yarn
        yarn
      }
    }

    stage('Test') {
      steps {
        yarn test
      }
    }
  }
}