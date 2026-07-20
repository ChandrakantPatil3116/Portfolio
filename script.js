document.addEventListener('DOMContentLoaded', function(){
    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');
    if(navToggle && primaryNav){
        navToggle.addEventListener('click', ()=>{
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            primaryNav.toggleAttribute('aria-hidden');
        });
    }

    // Hire button scrolls to contact
    const hireBtn = document.getElementById('hireBtn');
    const contact = document.getElementById('contact');
    if(hireBtn && contact){
        hireBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            contact.scrollIntoView({behavior:'smooth'});
        });
    }

    // Simple contact form handling
    const form = document.getElementById('contactForm');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            // Basic validation already handled by required attributes
            showToast('Thanks — message sent (demo)');
            form.reset();
        });
    }

    function showToast(msg){
        const t = document.createElement('div');
        t.className = 'toast';
        t.textContent = msg;
        Object.assign(t.style,{position:'fixed',right:'18px',bottom:'18px',background:'#111',color:'#fff',padding:'10px 14px',borderRadius:'8px',boxShadow:'0 8px 24px rgba(2,6,23,.4)',zIndex:9999});
        document.body.appendChild(t);
        setTimeout(()=>{t.style.opacity='0';t.addEventListener('transitionend', ()=>t.remove())},2200);
    }
});