#! /bin/bash

### ECHO COMMAND ###
#echo hello world!

### variables ###
# uppercase by convention
# letters, numbers, and undercases allowed
#NAME="Nick"
#echo "My name is $NAME"

### USER INPUT ###
#read -p "Enter your name: " NAME
#echo "Hello $NAME"

#  simple if statement

#if [ "$NAME" == "Nick" ]
#then
    #echo "Your name is Nick"
#else
    #echo "your name is NOT Nick"
#fi

### else if ###
#if [ "$NAME" == "Nick" ]
#then
    #echo "Your name is Nick"
    #elif [ "$NAME" == "Dave" ]
    #then
    #echo "Your name is Dave"
#else
    #echo "your name is NOT Nick or Dave"
#fi

### Comparison ###
#NUM1=3
#NUM2=6

#if [ "$NUM1" -gt "$NUM2" ]
#then
#echo "$NUM1" is greater than "$NUM2"
#else
#echo "$NUM1" is less than "$NUM2"
#fi

### File conditions ###

#FILE="Text.txt"
#if [ -f "$FILE" ]
#then 
#echo "$FILE is a file"
#else
#echo "$FILE is NOT a file"
#fi


### Case statements ###
#read -p "Are you 21 or over? Y/N" ANSWER
#case "$ANSWER" in 
#[yY] | [yY][eE][sS])
#echo "You can have a beer :)"
#;;
#[nN] | [nN][oO])
#echo "Sorry no beer for you"
#;;
#*)
#echo "Please enter y/yes or n/no"
#;;
#esac

### For loops ###

#NAMES="Nick Alex Dave Mark"
#for NAME in $NAMES
    #do
    #echo "Hello $NAME"
#done


### for loop to rename files
#FILES=$(ls *.txt)
#NEW="new"
#for FILE in $FILES
    #do
     #echo "renaming $FILE to new-$FILE"
     #mv $FILE $NEW-$FILE
#done

### While loop - read through a file line by line
#LINE=1
#while read -r CURRENT_LINE
#do
#echo "$LINE: $CURRENT_LINE"
#((LINE++))
#done < "./new-1.txt"


### Functions ###
#function sayHello() {
  #  echo "Hello world!"
#}
#sayHello

# with params 
#function greet() {
 #   echo "hello, I am $1 and i am $2"
#}
#greet "Nick" "39"

###create folder and write to a file
#mkdir hello
#touch "hello/world.txt"
#echo "Hello world" >> "hello/world.txt"
#echo "created hello/world.txt"