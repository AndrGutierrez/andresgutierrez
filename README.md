# Sync Files
If you want to add new images, you will have to run this command
```
aws s3 sync s3://www.andresgutierrez.me/images .
```
## Download Files
Download resources from s3, note that there will be build files, delete them and keep the ones you need
```
aws s3 cp s3://www.andresgutierrez.me  . --recursive
```

