# Sync Files
If you want to add new images, you will have to run this command
```
aws s3 sync s3://www.andresgutierrez.me/images .
```

**important:** robots.txt and sitemap.xml have to be uploaded manually
## Download Files
Download resources from s3, note that there will be build files, delete them and keep the ones you need
```
aws s3 cp s3://www.andresgutierrez.me  . --recursive
```

# Env variables
```
API_URL=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
NEXT_PUBLIC_CDN='https://andresgutierrez.me/images/attachments'
```
### Image optimization
Though next doesn't allow image optimization in static builds, image automatic optimization is done via [next-image-optimizer](next-image-optimizer`)

