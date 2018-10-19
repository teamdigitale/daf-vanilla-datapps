This is the Daf Skeleton web app.

You can integrate you code starting from App.js component.

Follow this steps in order to deploy the app inside the Daf environment: 

1 - change <daf-skeleton> with your app name (<your-app-name>) inside /kubernetes/test/daf-skeleton.yml file
2 - sudo docker build --no-cache -t nexus.teamdigitale.test/<your-app-name>:1.0.0 .
3 - sudo docker push nexus.teamdigitale.test/<your-app-name>:1.0.0
4 - kubectl delete -f kubernetes/test/daf-skeleton.yml (not the first time!!!)
5 - kubectl create -f kubernetes/test/daf-skeleton.yml