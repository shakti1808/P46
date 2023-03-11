class Security {

    constructor(){

        this.access1 = createInput("ANSWER HERE")
        this.access1.position(730,60);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(730,85);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("ANSWER HERE")
        this.access2.position(730,150);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(730,175);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("ANSWER HERE")
        this.access3.position(730,240);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(730,265);
        this.button3.style('background', 'lightgrey');

        this.access4 = createInput("ANSWER HERE")
        this.access4.position(730,325);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(730,350);
        this.button4.style('background', 'lightgrey');

        this.access5 = createInput("ANSWER HERE")
        this.access5.position(730,420);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(730,445);
        this.button5.style('background', 'lightgrey');

        this.access6 = createInput("ANSWER HERE")
        this.access6.position(730,510);
        this.access6.style('background', 'white');  

        this.button6 = createButton('Check');
        this.button6.position(730,535);
        this.button6.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });

        this.button6.mousePressed(() => {
            if(system.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                score++;
            }
        });
    }
}