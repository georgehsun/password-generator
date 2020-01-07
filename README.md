# password-generator

I like to first mention that this homework was a little difficult, but very fun and I learned a lot from trial and error. First thing I did was create a "if statement" that was <= 7 or >= 129. I noticed that my code worked, but there was one ciritcal problem. My code would still generate a password even if it was less that 7. So I did some research and put this... "writePassword();" The purpose of this code would let the logic actually funtion the way I wanted too. Now if you chose a number less than 7, it would alert you "Must be at least 8 characters!"

In order for me to ask the user questions like "click OK to confirm including special characters," I used a var with a name and confirm. This allowed me to have pop ups when the user is trying to generate a password. In order for this code to acutally work, I created a var with all the upper case, lower case, special char, and numberic chars and inserted "if" statements. So now if the user decides to add one, it will add it. If not, then the code will not run it.



Bonus: 
 copying the password was a little new to me so I had to do my research. I added an event listener with a document.getElementById. I also included a funtion. This code seemed to work for me.