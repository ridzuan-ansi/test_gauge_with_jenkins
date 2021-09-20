pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Compile
                npm install
            }
        }
        
        stage('Run Test Project') {
            steps {
                // Compile
                gauge run specs
            }
        }
    }
}
