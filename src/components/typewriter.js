import React, { Component } from 'react';

class Typewriter extends Component {

    componentDidMount() {
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
    
        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
            
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
    
            this.el.innerHTML = '<span class="wrap">'+'I '+this.txt+'</span>';
    
            var that = this;
            var delta = 200 - Math.random() * 100;
    
            if (this.isDeleting) { delta /= 2; }
    
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
    
            setTimeout(function() {
                that.tick();
            }, delta);
        };
    

        setTimeout(() => {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
        }, 2000);

        // INJECT CSS
        var css = document.createElement("style");

        css.type = "text/css";
 
        css.innerHTML = `.typewrite > .wrap {
            border-right: 2px solid rgba(120, 120, 120, 0.733);
            padding-top: 4px;
            -webkit-animation-name: cursor; /* Safari 4.0 - 8.0 */
            -webkit-animation-duration: 1s; /* Safari 4.0 - 8.0 */
            animation-name: cursor;
            animation-duration: 1s;
            animation-iteration-count: infinite;
        }
        `;
      
        document.body.appendChild(css);


        
    

    }

    render() {
        return (
            <div className={`typewriter ${this.props.className}`}>       
                <a href="" className="typewrite" data-period="2000" data-type='[ "build courses.", "design apps.", "develop websites.", "take photos", "develop apps", "develop websites" ]'>
                    <span className="wrap"></span>
                    {/* <div className='cursor-animation'></div> */}
                </a>
            </div>
        )
    }
}

export default Typewriter;