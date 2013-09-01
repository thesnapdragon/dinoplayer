# DinoPlayer

## Description

Simple HTM5 streaming music player using cloud storages

It is designed as a touchscreen-based music player, that can play music from many cloud storages (without using their APIs). You can control the player with gestures. To play or pause music simply tap the screen, for changing tracks swipe it.

Available: *Coming soon*

## Install

**Linux:**

Copy music in your Dropbox's Public folder. Download [install.sh](https://raw.github.com/thesnapdragon/dinoplayer/master/install/release/linux/install.sh) into the new music folder, and run the script! Or simply run in terminal:

~~~ {.bash}
$ curl https://raw.github.com/thesnapdragon/dinoplayer/master/install/release/linux/install.sh -o- | bash
~~~

**Windows:**

Copy music in your Dropbox's Public folder. Download [install.bat](https://raw.github.com/thesnapdragon/dinoplayer/master/install/release/win/install.bat) into the new music folder, and run the script!

## Usage

0. Install DinoPlayer Helper ([see previous section](#install)) in your Dropbox's Public folder (where you store mp3s).
1. Install DinoPlayer from Firefox Marketplace.
2. Select Dropbox as your cloud storage, and type in your Public folder's ID and folder name. You can get the Public folder's ID from your Dropbox page (see [screenshot](https://github.com/thesnapdragon/dinoplayer/blob/master/screenshots/screen4.png)), or from your desktop file manager ([see example on Windows](https://github.com/thesnapdragon/dinoplayer/blob/master/screenshots/screen5.png)). You can test it with this media url (example files are from [Wait What](https://soundcloud.com/wait-what/sets/the-notorious-xx)):

~~~
2920832/WaitWhat
~~~

3. Click on *Save*.
4. Listen unlimited music from cloud (without copying it to your phone)!

**Currently supported cloud storages:**

* [Dropbox](https://www.dropbox.com/)

## Used technologies

* Workflow: [Yeoman](http://yeoman.io/)
	- Scaffolding: [Yo](https://github.com/yeoman/yo)
	- Dependency management: [Bower](http://bower.io/)
	- Preview, Test, Build: [Grunt](http://gruntjs.com/)
* [Twitter Bootstrap](http://getbootstrap.com/2.3.2/)
* [HTML5 Boilerplate](http://html5boilerplate.com/)
* [AngularJS](http://angularjs.org/)
* [Last.fm](http://www.last.fm)