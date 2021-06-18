/*
Assignment 2 - Authentication  
Created by: Remedios Meneses
SN: 300691712
Submitted on: June 18, 2021
*/

const { event } = require("jquery");

// IIFE -- Immediately Invoked Function Expression
(function(){
    
    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger')
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
               if(!confirm("Are you sure?")) 
               {
                    event.preventDefault();
                    window.location.assign('/businesscontactlist-list');
               } 
            });
        }

    }

    window.addEventListener("load", Start);

})();