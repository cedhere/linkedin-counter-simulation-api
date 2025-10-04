# Pseudo LinkedIn Connections Counter API  

### Introduction  
This is a fun little project I built to dive into the world of **Docker** and **Kubernetes**. The app is super simple: you type in a name and it simulates a “LinkedIn-style” connection count with a random number. I even made a basic frontend so it’s presentable.  

⚠️ **Note:** This project is **not affiliated with LinkedIn in any way**. It’s just a playful demo to practice cloud-native tools.  

---

### Why I Built This  
I wanted a small but complete project that let me:  
- Build a lightweight Node.js + Express API  
- **Dockerize** it into a container  
- Deploy it on **Kubernetes** with multiple replicas  
- Practice scaling, services, and making an app “cloud ready”  

Basically, this project was my crash course in containerization + orchestration 

---

### Home Screen 
 

---

### How to Run (Docker)  
Make sure you have [Docker](https://www.docker.com/) installed.  

```bash
# Build the image
docker build -t linkedin-counter .

# Run the container
docker run -p 3000:3000 linkedin-counter
```
Now open http://localhost:3000

### How to Run (Kubernetes)

Make sure you have Kubernetes running (via Docker Desktop, Minikube, or a cluster) and kubectl installed.

```bash
# Apply deployment + service
kubectl apply -f deployment.yaml

# Check pods
kubectl get pods

# Check service
kubectl get services

# Scale up to 5 replicas
kubectl scale deployment linkedin-counter-deployment --replicas=5
```

If you’re running locally, you can port-forward:

```bash
kubectl port-forward service/linkedin-counter-service 8080:80
```

Then open http://localhost:8080

### Highlights

Deployed the Dockerized service on Kubernetes with 2–5 replicas, ensuring high availability and zero-downtime failover

Configured Kubernetes Service for external access and demonstrated horizontal scaling to handle 200+ requests/sec in load tests

This was my first real taste of Docker + Kubernetes, and it gave me a ton of insight into how modern apps are deployed at scale. Im super excited to learn more