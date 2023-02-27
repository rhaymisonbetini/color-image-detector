'use strict'

const colorPill = require('./src/myColorPill');


class ColorDetector{

    constructor(){
        this.colorPill = new colorPill();
    }

    /**
     * This methot recive de the id of image and start color analyze
     * @param string id 
     * @returns Promisse <Array>
     */
    
    async detectColorPalete(id){
        return  await this.colorPill.getMyColorPill(id);
    }
}

module.exports = ColorDetector;