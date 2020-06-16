# Install the papinet-API Mock

## Create a Virtual Machine (VM)

1. Create a Virtual Machine with a public IP address with HTTP (80) and HTTPS (443) traffic allowed.

## Domain Name

1. Create an DNS `A Record` with name `mock.papinet.rest` and the public IP address from above.

## Install NGINX

1. Type the following commands within a terminal session:

```
~$ sudo apt-get update
~$ sudo apt-get install -y nginx
```

2. Test the installation by opening <http://mock.papinet.rest> in a browser.

## Install Node.js

1. Type the following commands within a terminal session:

```
~$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
~$ sudo apt-get install -y nodejs
```

2. Check the installation by typing the following commands within a terminal session:

```
~$ node --version
v12.18.0
~$ npm --version
6.14.4
```

## Install and Run the Mock

1. Upload the files `app.js`, `package-lock.json` and `package.json` into the `~` folder.

2. Install the dependencies by typing the following command:
```
~$ npm install
```

3. Start the mock by typing the following command:
```
~$ npm start
```

4. Check that the mock is properly running by typing the following command:
```
~$ curl localhost:3000/locations
[{"id":"5b7c65f5-ce05-4fe9-8f71-aab9a094271c","iana":"1.3.6.1.4.1.88800","name":"Mill","address":["Mill Road 1"],"po
stalCode":"67000","city":"Strasbourg","country":"FR"},{"id":"5ad7ef7d-1c05-4f10-a7c8-4165f7209339","iana":"1.3.6.1.4
.1.43115","name":"Forest Company","address":["Forest Road 1"],"postalCode":"88000","city":"Epinal","country":"FR"}]
```

## Configure NGINX

1. Upload the file `mock.papinet.rest.conf` into the `~` folder.

2. Configure NGINX by typing the following commands:

```
~$ sudo mv mock.papinet.rest.conf /etc/nginx/sites-available
~$ sudo rm /etc/nginx/sites-enabled/default
~$ sudo ln -s /etc/nginx/sites-available/mock.papinet.rest.conf /etc/nginx/sites-enabled/mock.papinet.rest.conf
~$ sudo service nginx configtest
~$ sudo service nginx reload
~$ sudo service nginx status
```

3. Test the installation by opening <http://mock.papinet.rest/locations> in a browser.

## Use _Let’s Encrypt_ to configure HTTPS

1. Let's update the NGINX configuration by typing the following commands:

```
~$ sudo apt-get update
~$ sudo apt-get install software-properties-common
~$ sudo add-apt-repository universe
~$ sudo add-apt-repository ppa:certbot/certbot
~$ sudo apt-get update
~$ sudo apt-get install certbot python3-certbot-nginx
~$ sudo certbot --nginx
```

2. Test the installation by opening <https://mock.papinet.rest/locations> in a browser.