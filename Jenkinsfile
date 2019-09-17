pipeline {
  agent { docker { image 'node' } }

  stages {
    stage('Build') {
      steps {
        checkout scm // important so it doesnt always checkout to master
        sh 'export NODE_ENV="development"'
        sh 'npm install -g yarn'
        sh 'yarn'
      }
    }

    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
  }

  post {
    always {
      echo 'Done running tests! It might fail, it might pass - I don\'t care'
    }
  }
}