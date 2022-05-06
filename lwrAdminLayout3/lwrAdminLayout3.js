import { LightningElement } from 'lwc';
export default class LwrAdminLayout3 extends LightningElement {
    toggleMenu() {
        let toggleId = 'header-toggle',
            navId = 'nav-bar', 
            bodyId = 'body-pd', 
            headerId = 'header';
        let toggle = this.template.querySelector(`[data-id="${toggleId}"]`),
        nav = this.template.querySelector(`[data-id="${navId}"]`),
        bodypd = this.template.querySelector(`[data-id="${bodyId}"]`),
        headerpd = this.template.querySelector(`[data-id="${headerId}"]`);

        toggle.classList.toggle('bx-x');
        nav.classList.toggle('show');
        bodypd.classList.toggle('body-pd');
        headerpd.classList.toggle('body-pd');
    }

    renderedCallback(event) {
        // /*===== LINK ACTIVE  =====*/ 
        let linkColor = this.template.querySelectorAll('.nav__link2');

        function colorLink(){
            if(linkColor){
                linkColor.forEach(l=> l.classList.remove('active'))
                this.classList.add('active')
            }
        }
        linkColor.forEach(l=> l.addEventListener('click', colorLink))

        let toggleId = 'header-toggle',
            navId = 'nav-bar', 
            bodyId = 'body-pd', 
            headerId = 'header';
        let toggle = this.template.querySelector(`[data-id="${toggleId}"]`),
            nav = this.template.querySelector(`[data-id="${navId}"]`),
            bodypd = this.template.querySelector(`[data-id="${bodyId}"]`),
            headerpd = this.template.querySelector(`[data-id="${headerId}"]`);

        function closeMenu1() {
            nav.classList.remove('show');
            toggle.classList.remove('bx-x');
            bodypd.classList.remove('body-pd');
            headerpd.classList.remove('body-pd');
        }

        window.addEventListener("resize", function(){
            let w = window.innerWidth;
            if (w<768) closeMenu1();
        }, true);

        if(screen.width < 768) closeMenu1();
    }
}