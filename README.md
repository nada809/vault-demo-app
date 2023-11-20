# vault-demo-app

A simpe node app to show how to inject vault secrets into pods as environment variables without modifying source code.

Add Hashicorp repository:

helm repo add hashicorp https://helm.releases.hashicorp.com

Install Consul as storage backend

helm install consul hashicorp/consul --values helm-consul-values.yml

Install Vault:

helm install vault hashicorp/vault --values helm-vault-values.yml

To access demo app:

kubectl expose deployment vault-demo-app --name=vault-demo-app-svc --type=NodePort --port=5000
