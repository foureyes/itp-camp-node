---
layout: slides
title: Types, Operators, and Variables
---
<section markdown="block" class="title-slide">
# Types, Operators, Variables (oh, and Built-In Functions)
{% include title-slide-footer.html %}
</section>



<section markdown="block">
## But First, a Quick Review
</section>

<section markdown="block">
### Programs and Languages

 __Define: program__ &rarr;

<div class="incremental" markdown="block">

A sequence of instructions that specifies to a computer actions and computations to be performed

__List 3 differences between programming languages and natural languages?__

1. natural languages evolved organically, programming languages are usually synthetic and intentional
2. programming languages are usually unambiguous in meaning, while there is usually room for interpretation in natural languages
3. programming languages are generally more dense; every character is meaningful


</div>
</section>

<section markdown="block">
### Binary, Bits, and Bytes

__What are the possible values that a bit can hold?__ &rarr;

<div class="incremental" markdown="block">

0 and 1

__How many bits are in a byte?__ &rarr;

8

__What is 00001111 in decimal?__ &rarr;

15

__What is 2 in binary _ _ _ _ _ _ _ _ ?__ &rarr;

00000010

</div>
</section>

<section markdown="block">
### More About Programming Languages!

__What does a compiler do?__

<div class="incremental" markdown="block">

It translates a high-level programming language into a low-level language that the computer can execute (sometimes this is called object code)

__What's the difference between compiled and interpreted languages?__

Languages that have an explicit compilation step are generally thought of as compiled languages.  That is, the workflow for a compiled language is: write code, compile, execute... rather than just write code and then execute.

</div>
</section>

<section markdown="block">
### Tools

__What's the name of the language we're using?__

<div class="incremental" markdown="block">

Python

__What version of Python are we using?__

2.7.x

__Is python a high level or low level language?  Why?__

Python is a high-level programming language; it's meant to be easy to read and write for humans ...

</div>
</section>

<section markdown="block">
### Tools Continued

__What extension is used for Python source code files?__

<div class="incremental" markdown="block">

.py

__What is the name of the text editor / IDE that we use?__

We're using IDLE as our IDE

__In IDLE, what's the difference between using the text editor and the interactive shell to execute code?__

The interactive shell executes code as you enter each line; it give you immediate feedback.  For a text editor, you have to save your entire program first before you can run it.

</div>
</section>


<section markdown="block">
## Ok... Values and Types
</section>

<section markdown="block">
### What are Values?

* __values__ are just data
	* they can be stored in a variable 
	* they can be computed in an expression
	* they can't be _evaluated_ further (2 + 3 is not a value, because it can be evaluated further)
* some examples of values:
	* -123456
	* "a string is a value"
	* 1.00000001 
	* True, False
</section>

<section markdown="block">
### A Note on Values in Code

The representation of a bare value in code is sometimes called a __literal__.

* "a string " - a __string literal__
* 254 - an __integer literal__
* False - a __bool literal__
</section>

<section markdown="block">
### Values can be Classified by Data Type
A __data type__ is a set of values... or a category of values.  

* The type of a value determines how it can and can't be used 
* Sometimes __data type__ is also referred to as just __type__... or __class__

1. __str__ (string) - "yup, a string"
2. __bool__ (boolean value) - True
3. __int__ (integer) - 12
4. __float__ (floating point) - 12.121212
5. __complex__ (complex numbers) - 1j * 1j (just know that this exists; it won't be in the exam)

</section>

<section markdown="block">
### All of This Data, What Now?

<aside>You can use operators to manipulate values... </aside>

Familiar operators (and some not-so-familiar) allow you to:

* put values together
* modify values
* etc.

Think: __+__, __-__, __\*__, and so forth...

</section>

<section markdown="block">
## Strings
</section>

<section markdown="block">
### Strings

* a __string__ is a sequence of characters (any characters).
* including spaces and punctuation
	* and by spaces, I mean spaces, tabs, newlines, etc
	* for example " " is a string!
	* so is "" (this, however, is an _empty_ string)
* must __start and end__ with quotes!
* for example "foo", 'bar', and """baz""" are all strings
</section>


<section markdown="block">
### Unbalanced Quotes
__What do you think will happen if you have an extra quote?__ 

Let's give it a try: &rarr;

<div class="incremental" markdown="block">
{% highlight pycon %}
>>> "oops " I quoted again"
SyntaxError: invalid syntax
{% endhighlight %}

If you don't have matching start and end quotes (__unbalanced quotes__) you'll get a syntax error.
</div>
</section>

<section markdown="block">
### There Are Three Ways to Quote Strings

1. double quotes - &quot;
2. single quotes - &squot;
3. triple single or double quotes __for multiline strings__ - """

{% highlight python %}
"double quoted string"
'single quoted string'
"""more than
one line.  omg!"""
{% endhighlight %}
</section>


<section markdown="block">
### A Quick Aside on Comments
A __comment__ is text in a program that is meant for the human reader; it isn't used by the interpreter.  A comment can be:

* prefixed with the # token
* __or__ surrounded by triple double quotes as a bare string literal

These are both comments: &rarr;
{% highlight python %}
# this is a comment
"""
so
is
this
"""
{% endhighlight %}
</section>

<section markdown="block">
###A Hasty Escape
What if I want to put in a character that has special meaning in a string?  Say, for example... a single or double quote?

* you can use the backslash character before the special character
* for quotes, you can use mixed quotes (embed single quotes in a double quoted string)!
* let's give it a try... &rarr;

<div markdown="block">
{% highlight python %}
print("escaping using \"backslash\"")
print("single  quotes ''''") 
print("""some "double quotes"""")
{% endhighlight %}
</div>
</section>

<section markdown="block">
###I Heard You Like Backslashes
<aside>So I...</aside>

__What if you want an _actual_ backslash in your string?__ &rarr;

<div class="incremental" markdown="block">
You can use backslashes to escape backslashes 
{% highlight python %}
print("I heard you like \\'s, So I put a \\ before your \\")
{% endhighlight %}
</div>
</section>

<section markdown="block">
###New Lines (Again)

You can actually represent a new line as a character by using:

{% highlight python %}
\n
{% endhighlight %}

* that's __backslash__, then __n__, or the __newline character__
* so... a multiline string can also be created by using __newline characters__:

{% highlight python %}
print('two\nlines\n')
{% endhighlight %}
</section>

<section markdown="block">
###On a Tropical Island
<aside>A Quick Activity</aside>

![jake](../resources/img/jake.jpeg)
</section>
<section markdown="block">
###On a Tropical Island Lyrics

These are lyrics to a song called ["On a Tropical Island"](http://www.youtube.com/watch?v=E6-HjFQ_Jtg#t=14)... from a _fine_ cartoon named Adventure Time.  It has a bunch of new lines in it, as well as single quotes.

__How would you get Python to print out these lyrics?  Let's find 2 different ways to print this out.__&rarr;

{% highlight pycon %}
On a tropical island,
Underneath a molten lava moon.
Hangin' with the hula dancers,
Askin' questions cause' they got all the answers.
{% endhighlight %}
</section>


<section markdown="block">
### Quoting Strings?

__What are the three ways to quote a string again?__ &rarr;


<div class="incremental" markdown="block">
{% highlight python %}
"double quoted string"
'single quoted string'
"""more than
one line.  omg!"""
{% endhighlight %}
</div>
</section>

<section markdown="block">
### When Would You Use One Over the Other?

__Hmmmm... good question.  What do you think?__ &rarr;

<div class="incremental" markdown="block">
* single or double quotes allow you to put in single or double quotes into a string without needing to __escape__ them
	* "I'm"
	* 'use a " to delimit a string'
* triple double quotes allow you to span multiple lines (you can't span multiple lines with single or double quotes)
</div>
</section>

<section markdown="block">
### Constructing Strings / String Operators

__So far, we've seen a couple of methods of putting strings together.  What are they?__ &rarr;

* string __concatenation__ - adding two strings together using the __+__ symbol
	* __concatenation__ gives back a string
* string __formatting__ - creating a string with place holders where variables are plugged in


</section>

<section markdown="block">
### What's String Concatenation?

__String concatenation is just a fancy way of saying add.  It actually works intuitively.__ &rarr;

* __+__ adds two strings together
* both arguments must be strings
* if an operand is not a string, you'll get an error!

{% highlight python %}
# will work fine
"lucky number " + "9"

# type error
"lucky number " + 9
{% endhighlight %}
</section>

<section markdown="block">
### String Formatting

__String formatting__ allows placeholders in a string to accommodate variable / value substitution by using the % operator.

{% highlight python %}
greeting = "Hi.  My name is %s and I have %s %s"
name = "Joe"
number_of_pets = 314
pet = "aardvarks"
result = greeting % (name, number_of_pets, pet)
print(result)
{% endhighlight %}
</section>


<section markdown="block">
### String Multiplication

You can also use the __*__ operator to multiply a string by an int (note that this will give an error if you use a float instead of an int!)

{% highlight python %}
s = "aardvark " * 3
print(s)
# prints out: aardvark aardvark aardvark  
{% endhighlight %}
</section>

<section markdown="block">
### String Operators at a Glance

These are the string operators that we learned (note - they all return strings, but the types of arguments may vary depending on operator).  __What were they again? &rarr;__

<div class="incremental" markdown="block">
1. __+__ - concatenation - takes two strings (error otherwise) &rarr; returns a string
2. __%__ - formatting - takes a string on the left and a comma separated list of values on the right
3. __*__ - multiplication - takes a string and int (error otherwise, even if it's another numeric type), repeats the string that number of times &rarr; returns a string
</div>
</section>


<section markdown="block">
##Numeric Types
<aside>Integers, Floating Point Numbers and Complex Numbers</aside>
</section>

<section markdown="block">
###Three Numeric Types
The following types are all closely related; most of the same operations can be applied to all of them:

1. __int__ (integer)
2. __float__ (floating point)
3. __complex__ (complex numbers)
</section>

<section markdown="block">
### int (integer)

__What's an integer?__

<div class="incremental" markdown="block">
* __integer__ - whole number, can be negative
* __int__ is the actual name of the integer type
* 24, -25 &rarr;
* no size limit (well, as much as your computer can handle)!
* for example: 1337 ** 20 &rarr;
</div>
</section>

<section markdown="block">
### __float__ (floating point)

__What's a floating point number?__

<div class="incremental" markdown="block">
__A floating point number__ represents real numbers

__...but what's a real number?__ &rarr;

* a quantity across a continuous line, like fractions or irrational numbers like pi or the square root of two
* floating point numbers are __indicated by a decimal point__: 5.55555, 5.0 &rarr;
</div>
</section>

<section markdown="block">
### Really Big or Really Small Numbers
Very __large__ or __small__ floating point numbers are expressed in scientific notation

* 5555 ** 5.0 gives back 5.289569361832972e+18 (that is 5.2389 ... times 10 to the 18th power) &rarr;
* the exponent can be + or - 
* a few more examples:
	* 52e+3 = 52 * 10 ^ 3 = 52000
	* 52e-3 = 52 * 10 ^ -3 = 0.052
* __What is the result of 2e+2?__ &rarr;

<div class="incremental" markdown="block">
* 200.0
</div>
</section>

<section markdown="block">
### Uh-oh - That's Too Much
<aside>Overflow</aside>

* unlike integers, floats have min and max values... if you have a value that's too big or too small
* sys.float_info.max &rarr;
* 5555**55555.0 &rarr;

{% highlight pycon %}
>>> 5555**55555.0
Traceback (most recent call last):
  File "<pyshell#93>", line 1, in <module>
    5555**55555.0
OverflowError: (34, 'Result too large')
>>> 
{% endhighlight %}

<!-- _nomd -->
</section>

<section markdown="block">
###Complex Numbers
<aside>Um - Does anyone remember these?  I don't</aside>

For completeness... __Python supports complex numbers__

* numbers with square root of -1 / imaginary numbers
* 1j * 1j &rarr;
</section>

<section markdown="block">
###Don't, Use, That, Comma
Clearly, symbols have special meanings in numeric types

* a decimal point signifies a floating point number
* scientific notation is represented by e and a plus or minus
* j is the imaginary part of a complex number

__However - Don't use commas!  They don't mean what you expect.__ &rarr;
{% highlight pycon %}
>>> 3,000
(3, 0)
>>> # huh???
>>> # it's something called a tuple
{% endhighlight %}
</section>

<section markdown="block">
###So You Don't Know What Type You Have
* There's a function called __type__
* Let's look at it in the interactive shell &rarr;
* Notice the arrow... it says it returns the "type" of the parameter passed in...
* Here's how you would use it: &rarr;

{% highlight pycon %}
type(1.0)
{% endhighlight %}
</section>

<section markdown="block">
###A Guessing Game
<aside>What type is it?</aside>

1. __1__
2. __1.0__
3. __"1"__
4. __"""1.0"""__
5. __1.111__
6. __'1,111'__

<div class="incremental" markdown="block">
1 is an __int__. 2 and 5 are __floats__.  Everything else is a string.
</div>
</section>

<section markdown="block">
### Reeeeeewind
<aside>A Quick Recap</aside>
* What do we call a bare value in code... like "foo" or 5?
* Name three ways to represent a syntactically correct string in Python
* Name two ways to put a double quote in a string
* How about a backslash, or newline?
* Which type can be affected by really large or small numbers - float or int?
* How can I tell if a number is a float?
* What function could I use to determine the type of a value or variable?
* What are two ways of representing comments?
</section>


<section markdown="block">
### Operators
* addition, multiplication and subtraction: __+__, __\*__, and __-__
* division: __/__ (results in a float even if two integers - ex 10 / 2 &rarr; 5.0)
* integer division: __//__ (next integer to the left, or round down - ex -23 // 3 &rarr; -8)
* modulo: __%__ (think _remainder_ - ex 10 % 7 &rarr; 3)
* exponentiation: __**__ (ex 2 ** 3 &rarr; 8)
</section>

<section markdown="block">
### It's Worth Taking a Closer Look at Modulo

You can do some neat things with modulo.  Here are a couple:

* determine if one number is divisible by another
* determine odd or even

__How?__ &rarr;

<div class="incremental" markdown="block">
* if one number is divisible by another, modulo will return zero
* number modulo 2... will yield either 0 (even) or 1 (odd)
</div>
</section>

<section markdown="block">
### (Parentheses)
<aside>(I Use Them A Lot)</aside>
* you can use parentheses to group expressions...
* this will affect odrer of operations
* __what will (6 + 4) * 5 return?__ &rarr;

<div class="incremental" markdown="block">
{% highlight pycon %}
>>> (6 + 4) * 5
50
{% endhighlight %}
</div>
</section>

<section markdown="block">
### Numeric Operator Precedence

__What order do you think these numeric operators are evaluated in? &rarr;__

<div class="incremental" markdown="block">
* as you would expect - follows PEMDAS 
* (parentheses, exponentiation, multiplication, division, addition, subtraciton)
* __what would (5 + 15) * 2 ** 2 + 20 result in? &rarr;__

{% highlight pycon %}
>>> (5 + 15) * 2 ** 2 + 20
100
{% endhighlight %}
</div>
</section>

<section markdown="block">
### Numeric Operators and Type Compatibility

* most of these numeric operators will only work with numeric types (float, int)
* if you try to add, subtract, divide with an numeric type and a string, you will get an error
* __let's see that in action__ &rarr;
</section>

<section markdown="block">
### Results of the Following Operations

__What are the resulting values and types after evaluating the following expressions? (error is possible)__ &rarr;

* 28 / 7
* 28 // 10
* 28 % 10
* 28 / "7"

<div class="incremental" markdown="block">
* 4.0 - float
* 2 - int
* 8 - int
* Error
</div>
</section>

<section markdown="block">
### Implementing a Formula

An obvious use case for these numeric operations is implementing a formula.  __Python can simply be used as a glorified calculator__...

For example: __find the area of a triangle with a base of 10 and a height of 4 (half of base times height)__

<div class="incremental" markdown="block">
{% highlight python %}
print(1/2 * 10 * 4)
{% endhighlight %}
</div>
</section>

<section markdown="block">
### A Shortcut

There's a shortcut to add a value to an existing variable (the same exists for subtraction as well).  __What is the syntactic sugar that we use to increment and decrement variables?__ &rarr;

<div class="incremental" markdown="block">
__-=__ and __+=__ are shortcuts for decrementing or incrementing a variable...

{% highlight python %}
a = 0

# increment a by some value, just set the variable, a, equal to a + 5
a = a + 5

# or... alternatively, use a shortcut +=:
a += 5
{% endhighlight %}
</div>
</section>

<section markdown="block">
## Variables and Variable Naming
</section>

<section markdown="block">
### Variables

* __variable__ - name that refers to a value
* this terminology is important; very specific... __name__ and __value__
* we can now use that name instead of the explicit value
* the equals sign, __=__ is the __assignment token__ or __assignment operator__ that we use to bind a name to a value
	* name on left
	* value on right

{% highlight python %}
some_variable_name = "a value"
{% endhighlight %}

</section>

<section markdown="block">
### Assignment vs Equality

Don't confuse the assignment operator with the equality operator!

{% highlight pycon %}
# one equal sign is assignment
a = 1  

# two equal signs mean test for equality (we'll see more of this later)
a == 1
{% endhighlight %}
</section>

<section markdown="block">
### Reassignment / Rebinding

* you can reassign or rebind
* __let's see that in action__ &rarr;

{% highlight pycon %}
>>> a = 23
>>> a
23
>>> a = "foo"
{% endhighlight %}
</section>

<section markdown="block">
### While We're on the Subject... Multiple Assignment

You can assign multiple variables in one line.

{% highlight pycon %}
>>> a, b = 50, 60
>>> a
50
>>> b
60
{% endhighlight %}
</section>


<section markdown="block">
### Naming Variables
* you can make them as long as you want... though I suppose it could crash your computer
* names can only consist of numbers, letters and/or underscores
* the first character has to be a letter or an underscore
* __case sensitive__ - case matters
* the name can't be a keyword or reserved word
</section>

<section markdown="block">
### Am I a Valid Name?

__Are these valid variable names? &rarr;__

* _foo
* 1_foo
* foo
* 1foo
* $foo
* foo$
</section>

<section markdown="block">
### Am I a Valid Name (Answers)?

__Are these valid variable names? &rarr;__

* _foo - yes
* 1_foo - no
* foo - yes
* 1foo - no
* $foo - no
* foo$ - no
</section>

<section markdown="block">
### Let's Use Some Variables

Write the following program:

1. create three variables, noun_1, verb, noun_2
2. assign a string to each variable
3. print out the result of stitching those variables within the string... 'The noun_1 verb over the noun_2'
	* for example, if your values were: cow, jumped and moon
	* the output would be 'the cow jumped over the moon'

<div class="incremental" markdown="block">
noun_1, verb, noun_2 = 'cow', 'jumped', 'moon'
sentence = 'The %s %s over the %s' % (noun_1, verb, noun_2)
print(sentence)
</div>
</section>

<section markdown="block">
## Built-in Functions
</section>

<section markdown="block">
### Functions?

__What's a function again?__ &rarr;

<div class="incremental" markdown="block">
* a function is a bunch of code that gets executed whenever the name of the function is _called_
* it's a black box that does _something_
* similar to functions you've seen in math
	* it may have parameters (inputs)
	* it can return a value (output)
	* though it doesn't necessarily have to have parameters or return values
</div>
</section>

<section markdown="block">
### And... What About Built-In Functions 

* python comes with a bunch of built-in function that do some useful stuff
* like... print things to the screen, or ask for user input
* you can access all of these functions immediately in your program!
</section>

<section markdown="block">
### Using Built-In Functions

How do you use (_call_) built-in functions in your code?  

{% highlight python %}
"""
1. start with the function name 
2. use parentheses to signify that you're calling a function
3. within those parentheses, put in the value(s) that you're passing in, separated by commas
"""
{% endhighlight %}
</div>
</section>

<section markdown="block">
## Parentheses after a function name signify that you're calling (executing) that function!
</section>

<section markdown="block">
### Function Calls - Examples

{% highlight python %}
# calling a function that doesn't accept any values as inputs
myfunction()

# calling a function that accepts a value as an input
myfunction_with_arguments(25)

# or
num = 25
myfunction_with_arguments(num)
{% endhighlight %}
</section>


<section markdown="block">
### Some Functions Give Back Values

* when they do, you need to capture the value they give back
* sometimes you can do this with a variable
* ... or you can use it directly in an expression

{% highlight python %}
# a function can return a value
result = myfunction()

# or ... depending on what the function gives back, you can use the value right away!
print(myfunction() + 5)
{% endhighlight %}
</section>

<section markdown="block">
### Using Built-In Functions with Multiple Input Values

1. again start with the function name
2. use parentheses to signify that you're calling a function
3. within those parentheses, put in the values, __separated by commas__, that you're passing in

{% highlight python %}
"""
print can take multiple values as inputs
this contrived example shows two strings as inputs to print
"""

print("Hi ", "there")
{% endhighlight %}
</section>


<section markdown="block">
### Some Terminology

* __call__ - using a function in your code, executing a function
* __arguments__ - the actual literal values that a function is called with; 25 is the argument in _print(25)_
* __parameters__ - within the function itself, the names given to the values passed in (we'll see more about this when we create our own functions)
* __passing__ arguments into a function - providing input values to a function 
* __return__ value - the value that's given back to your program after _calling_ a function (returning a value __doesn't mean printing out a value__)

</section>

<section markdown="block">
### Talkin' the Talk

Using this code as an example:

{% highlight python %}
num = "5"
x = int(num)
{% endhighlight %}

1. __what is the name of the function being called?__ &rarr;
2. __what are the arguments passed in to the function?__ &rarr;
3. __what value is returned from this function call?__ &rarr;

<div class="incremental" markdown="block">
1. int
2. num, or the string, "5"
3. the integer, 5
</div>
</section>

<section markdown="block">
### Talkin' the Talk 2


{% highlight python %}
length = 10
width = 7
print(length, width)
{% endhighlight %}

1. __what is the name of the function being called?__ &rarr;
2. __what are the arguments passed in to the function?__ &rarr;

<div class="incremental" markdown="block">
1. print
2. the integers, length and width (10 and 7 respectively)

Note that __print does not return a value to your program; rather it _prints_ values to the screen__.
</div>
</section>


<section markdown="block">
### Composing Functions

* you can call functions within functions
* the value returned by the inner function calls are what's used as arguments to the outer function call

{% highlight python %}
t = type(str(5 + 5))
print(t)
{% endhighlight %}

__What is printed out by this program?__ &rarr;

<div class="incremental" markdown="block">
The type of the result of calling str(5 + 5), which __turns out to be?__ &rarr;

{% highlight python %}
<class 'str'>
{% endhighlight %}
</div>
</section>

<section markdown="block">
### Conversion Functions

For each type that we learned, there's a function with the same name that will create a value of that type.  They __always__ return their _associated type_!

* __int(value)__
* __str(value)__
* __float(value)__

{% highlight python %}
result = int("5")
{% endhighlight %}
</section>

<section markdown="block">
### Type Conversion

You can change from one type to another using __functions__ of the same name as the __type__ you are trying to convert to.  Let's look at what autocomplete says about the following functions and demo them.  &rarr;

* __int__(), __str__(), and __float__()
* unlike print, these functions __return (give back) a value__ to your program!
* this is called __type conversion__ or __casting__
</section>

<section markdown="block">
###And This Helps... How? 
__Let's fix some of our previous type errors__ &rarr;


{% highlight pycon %}
3 + " blind mice"
{% endhighlight %}

(of course, this is contrived, since we know that 3 is an int, and we could have just wrapped it in quotes: '3'... but imagine if we didn't know the type beforehand!)

<div class="incremental" markdown="block">

{% highlight pycon %}
>>> str(3) + " blind mice"
'3 blind mice'
{% endhighlight %}
</div>
</section>


<section markdown="block">
### Conversion Functions Continued

* note that __int()__ and __float()__ will only accept int and float _"like"_ values... "5" will be converted (even with spaces), but "five" will cause an error
* these can be used to avoid errors when using numeric or string operators 
{% highlight python %}
num = 99
print(str(num) + " red balloons")
{% endhighlight %}
* remember - you don't have to convert if your value is already the type you're converting to
{% highlight python %}
num = "99" # no need to convert
print(num + " red balloons")
{% endhighlight %}

</section>

<section markdown="block">
### Other Built-In Functions

* __print__ - outputs value to screen; returns nothing
* __raw\_input__ - prompts user for input; returns a str
* __type__ - returns the type of the value passed in; returns a type object
* __round__ - rounds a number; returns an int (when called with one argument) ...(we used this in a homework)
* __abs__ - absolute value; returns a numeric type
* obv, all of the conversion functions from before
</section>

<section markdown="block">
### The raw\_input() Function

There's a built-in function in Python called __raw\_input__ ...

* __what does it do? does it have parameter(s)?__ &rarr;
* __(how can we find out through IDLE?)__ &rarr;
* __what does it return?__ &rarr;
* __what if the user input is a number?__ &rarr;

<div class="incremental" markdown="block">
* __input__ takes one parameter - the prompt that is displayed (think of it as print plus retrieving user input!) 
* use __help__! or check the docs...
* it returns a string representing the user's input
* it will __always return a string__ - even if the user inputs a number
</div>
</section>

<section markdown="block">
### raw\_input Summary

* it takes __one argument__... which is what gets displayed to the user (the prompt)
* the program will wait until the user provides input
* input returns a string that represents the user's input
* even if the input looks numeric (say 234)
* __it still returns a string__ (in the previous case "234")

__Let's write a short program that will echo whatever the user enters.__ &rarr;
</section>

<section markdown="block">
### A Polite Program

__Write a program that asks for the user's name, and responds by printint out hello, along with the person's name.__ &rarr;

{% highlight bash %}
What's your name?
> Bob
Hello Bob.
{% endhighlight %}

<div class="incremental" markdown="block">
{% highlight python %}
name = raw\_input("What's your name?")
print('Hello ' + name)
{% endhighlight %}
</div>

</section>

<section markdown="block">
## [Conditionals](conditionals.html)
</section>
