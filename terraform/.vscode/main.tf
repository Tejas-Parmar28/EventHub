resource "aws_security_group" "eventhub_sg" {
  name        = "eventhub-sg"
  description = "Security group for EventHub app"

  ingress {
    description = "SSH access (INSECURE - intentional)"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]   # ❌ INTENTIONAL VULNERABILITY
  }

  ingress {
    description = "App access"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "eventhub_ec2" {
  ami                    = "ami-0f5ee92e2d63afc18" # Amazon Linux 2 (Mumbai)
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.eventhub_sg.id]

  tags = {
    Name = "EventHub-DevSecOps"
  }
}
