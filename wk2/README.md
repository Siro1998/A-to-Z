# wk2 Regex Game!

For wk2 assignment, I continued the Regex Golf game we played in class.

### Backrefs 
* I noticed that all the words on the left have a repeated three characters, so I put **(...).*\1**  which is any three characters followed by one or more characters,and followed by anything that is in the first parentheses.
<img width="895" alt="Screen Shot 2021-09-21 at 11 27 16 PM" src="https://user-images.githubusercontent.com/43830622/134279372-47a9c430-8fee-4cfe-9892-9a4c754f5d63.png">

### Abba
* The words on the right have patterns like "abba", in regex is **(.)(.)\2\1**. Must not match is **?!**. I don't want "abba" pattern in any part of the string so **^(?!.*(.)(.)\2\1)**, which means match a line that does not have any charaters followed by "abba" pattern.
* This one is very hard for me, because I don't know how to express not match at first. After some searching I found the **?!** expression.
<img width="884" alt="Screen Shot 2021-09-22 at 12 29 29 AM" src="https://user-images.githubusercontent.com/43830622/134283823-081cdd50-0502-4068-abbd-f3defb3e6263.png">

### A man, a plan
* For this one, I want to search for works only contain forms like "abba", "abcba", "abccba", "abcdcba", so I put **^(.)(.)(.).?\3?\2?\1$** for this one, which means it start with any 3 characters followed by one optional character, followed by the optional 3rd and 2rd character, and followed by the first character, and end of the string.
* I found a different answer for this one **^(.)[^p].*\1$**. This is shorter than mine, but I think it's kind of cheating by not allowing p in the string.
<img width="882" alt="Screen Shot 2021-09-22 at 12 51 30 AM" src="https://user-images.githubusercontent.com/43830622/134285548-91df1889-1c8b-486e-8e03-96d297545edc.png">

### Prime
* I can't figure out how to do this one. I can express odd number, but I don't know how to do prime number. I checked the answer for this one, which is **^(?!(..+)\1+$)**, but I don't understand why $ is inside the parenthesis.
* I also checked this website for more information on how to check if a number is a prime number, but still very confused. https://iluxonchik.github.io/regular-expression-check-if-number-is-prime/
<img width="892" alt="Screen Shot 2021-09-22 at 1 40 57 AM" src="https://user-images.githubusercontent.com/43830622/134289136-a19f74a2-93f9-4df3-902a-c8c4d28c889a.png">

### Four
* I need to match the pattern "axbxcxdx", so I put **.?(.)(.\1){3}**, which is one character (optional) followed by one particular character I will call it x then followed by another character and followed by x and repeat that for 3 times. This one is quite simple.
<img width="882" alt="Screen Shot 2021-09-22 at 1 43 52 AM" src="https://user-images.githubusercontent.com/43830622/134289413-f70fd9fe-443a-40bf-a8dc-d36072d105f1.png">

This is a very fun game, some of them takes more time than others, but I think I'm much more familiar with regular expression now. 

### One thing I noticed that is a little confusing
* On the website https://shiffman.net/a2z/regex/, I thought * is 0 or more, and + is 1 or more.
<img width="715" alt="Screen Shot 2021-09-22 at 1 18 19 AM" src="https://user-images.githubusercontent.com/43830622/134287615-8b0f7cfd-3a87-4e30-a326-d489d851a0a0.png">
