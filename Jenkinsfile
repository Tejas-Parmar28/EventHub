pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/Tejas-Parmar28/EventHub.git'
      }
    }

    stage('Terraform Security Scan - Trivy') {
      steps {
        sh '''
          echo "======================================"
          echo "Running Trivy scan on Terraform code"
          echo "======================================"
          trivy config terraform/ --severity HIGH,CRITICAL
        '''
      }
    }

  }
}
