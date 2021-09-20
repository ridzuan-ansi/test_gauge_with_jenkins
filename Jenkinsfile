pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Compile
                sh 'npm install'
            }
        }
        
        stage('Run Test Project') {
            steps {
                // Compile
                sh 'gauge run specs'
            }
        }
    }
}
