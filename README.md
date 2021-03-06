# Oak Tree Touchscreen
Interactive oak tree identification touchscreen application for the [San Diego Natural History Museum's Coast to Cactus exhibit](http://www.sdnhm.org/exhibitions/current-exhibitions/coast-to-cactus-in-southern-california/).

## Disclaimer
This code is offered here for example and reference. The compiled application is not intended for public consumption outside of the exhibit. This repository is lacking the media files that make up the full application.

## Technical highlights
To divide the touchscreen into usable sections we used unseen Vornoi Diagrams to map activation areas to content.

## Installation
This application is installed using [SMM's private Puppet manifest](https://github.com/scimusmn/boxen/blob/master/modules/projects/manifests/sdnhm_0813_oak.pp).
