#include <stdio.h>
#include <string.h>
#include <math.h>

int printHello(){
    printf("Hello, World!\n");
    return 0;
}

int sum(int x, int y){
    printf("%d\n", x+y);
}

int largest(int x, int y, int z){
    if(x>y && x>z){
        printf("%d is the largest\n", x);
    }else if(y>z && y>x){
        printf("%d is the largest\n", y);
    }else if(z>x && z>y){
        printf("%d is the largest\n", z);
    }else if(x==y && y==z){
        printf("All numbers are equal\n");
    }else if(x==y && x>z){
        printf("%d and %d are the largest\n", x, y);
    }else{
        printf("It might be different\n");
    };
}

int evenOdd(int x){
    if(x%2==0){
        printf("%d is even\n", x);
    }else{
        printf("%d is odd\n", x);
    }
}

int factorial(int n){
    int result = 1;
    for(int i=1; i<=n; i++){
        result *= i;
    }
    printf("Factorial of %d is %d\n", n, result);
    return 0;
}

int reverseNumber(int num){
    while (1)
    {
        printf("%d", num%10);
        num = (num-(num%10))/10;
        if(num<=0){
            break;
        }
    }
    printf("\n");
    return 0;
    
}


int palindrome(){
    char data[] = "abbba";
    int len = sizeof(data);
    char copy[len];
    strcpy(copy, data);
    for(int i=0; i<len/2; i++){
        char temp = data[i];
        data[i] = data[len-2-i];
        data[len-2-i] = temp;
    }

   printf("%d\n", !(strcmp(data, copy)));
}

int checkPrime(int num){
    for(int i=2; i<num; i++){
        if(num%i==0){
            return 0;
        }
    }
    return 1;
}

int Fibonacci(int num){

    int num1 = 0;
    int num2 = 1;
    printf("%d\n", num1);
    printf("%d\n", num2);
    for(int i=2; i<num; i++){
        int nextNum = num1 + num2;
        printf("%d\n", nextNum);
        num1 = num2;
        num2 = nextNum;
    }

    return 0;

}

int leapyear(int year){
    if (year % 400 == 0) {
        printf("%d is a leap year.\n", year);
    } else if (year % 100 == 0) {
        printf("%d is not a leap year.\n", year);
    } else if (year % 4 == 0) {
        printf("%d is a leap year.\n", year);
    } else {
        printf("%d is not a leap year.\n", year);
    }

    return 0;
}

int sumelement(){
    int arr[] = {1,2,3,4,5,6,7,8,9};
    int sum=0;
    for(int i=0; i<sizeof(arr)/sizeof(arr[0]); i++){
        sum+=arr[i];
    }
    printf("%d\n", sum);
}


int findlargest(){
    int arr[] = {1,2,3,4,5,6,45,1,4,25,33,15,12};
    int max = arr[0];
    for(int i=0; i<sizeof(arr)/sizeof(arr[0]); i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }

    return max;
}


int stringlength(char str[]){
    int count=0;
    while(str[count]!='\0'){
        count++;
    }
    return count;
}

int perfectSquare(int x){
    int res = pow(x, 0.5);
    return (pow(res, 2) == x)? 1 : 0;
}

int SecondLargest(){
    int arr[] = {1,2,3,4,5,6,7,8,9};
    int max = arr[0];
    int final = arr[0];
    for(int i=0; i<sizeof(arr)/sizeof(arr[0]); i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    for(int i=0; i<sizeof(arr)/sizeof(arr[0]); i++){
        if(final<arr[i] && arr[i]!=max){
            final = arr[i];
        }
    }
    printf("%d\n", final);
}


int averageOfArray(){
    int arr[] = {1,2,3,4,5,6,7,8,9};
    float sum=0;
    for(int i=0; i<sizeof(arr)/sizeof(arr[0]); i++){
        sum+=arr[i];
    }

    float len = sizeof(arr)/sizeof(arr[0]);
    printf("%1.2f\n", sum/len);
    return 0;
}

int calculatepower(int num, int power){
    printf("%1.2f\n", pow(num, power));
}

int printPrime(int starter, int ender){

    for(int j=starter; j<ender; j++){
        for(int i=2; i<j; i++){
            if(j%i==0){
                break;
            }
            if(i==j-1){
                printf("%d ", j);
            }
        }
    }

}

int reverserData(){
    char data[] = "hello";
    int len = sizeof(data);
    for(int i=0; i<len/2; i++){
        char temp = data[i];
        data[i] = data[len-2-i];
        data[len-2-i] = temp;
    }
    printf("%s\n", data);
    
}

int countVowelAndConsonents(char *data){

    int vowelCount = 0;
    int consonentCount = 0;

    for(int i=0; i<strlen(data); i++){
        if(data[i]=='a' || data[i]=='A' ||data[i]=='e' ||data[i]=='E' ||data[i]=='o' ||data[i]=='O' ||data[i]=='I' ||data[i]=='i' ||data[i]=='u' ||data[i]=='U'){
            vowelCount++;
        }else{
            consonentCount++;
        }
    }

    printf("Vowel count: %d\n", vowelCount);
    printf("Consonent count: %d\n", consonentCount);

}

int sumOfFirstNNaturalNumber(int n){
    int sum=0;
    for(int i=1; i<=n; i++){
        sum+=i;
    }
    printf("%d\n", sum);
}

int getAscii(char c){
    printf("%d\n", c);
}

int swapWithoutThird(int a, int b){
    a = a + b;
    b = a - b;
    a = a - b;
    printf("After swapping: a = %d, b = %d\n", a, b);
}

int swapWithThird(int a, int b){
    int temp = a;
    a = b;
    b = temp;
    printf("After swapping: a = %d, b = %d\n", a, b);
}

int countTheNumberofDigit(int digit){
    int count=0;
    while(digit!=0){
        digit = digit/10;
        count++;
    }
    return count;
}

int checkValidation(char *str){
    int alphabet = 0;
    int digit = 0;
    int specialChar = 0;

    for(int i=0; i<strlen(str); i++){

        if( (str[i]>=97 && str[i]<=122) || (str[i]>=65 && str[i]<=90) ){
            alphabet = 1;
        }else if( str[i]>=48 && str[i]<=57 ){
            digit = 1;
        }else{
            specialChar = 1;
        }

    }

    printf("alphabet = %d\ndigit = %d\nspecial Char = %d\n", alphabet, digit, specialChar);


}

int celToFer(int cel){
    // formula: F = (C * 9/5) + 32  // where C is the Celsius temperature.
    float step1 = cel*(1.8);
    printf("%1.2f\n", step1+32);
}

int FerToCel(int Fer){
    // formula: C = (F - 32) * 5/9  // where F is the Fahrenheit temperature.
    float step1 = Fer - 32;
    printf("%1.2f\n", step1*5/9);
}

int simpleCalc(int a, int b, char operator){

    switch(operator){
        case '+':
            printf("%d\n", a+b);
            break;
        case '-':
            printf("%d\n", a-b);
            break;
        case '*':
            printf("%d\n", a*b);
            break;
        case '/':
            if(b==0){
                printf("Error: Division by zero\n");
            } else{
                printf("%d\n", a/b);
            }
            break;
        default:
            printf("Error: Invalid operator\n");
    }

}

int checkArmstrong(int num){
    int init = num;
    int count = countTheNumberofDigit(num);
    int sum =0;
    while(1){
        int power = pow(num%10, count);
        sum += pow(num%10, count);
        num = (num-(num%10))/10;
        if(num==0) break;
    }
    printf("%d\n", sum);
    printf("%d\n", init);
}

int sumOfDigit(int num){
    int sum = 0;
    while(num!=0){
        sum += num%10;
        num = (num-(num%10))/10;
    }

    printf("%d\n", sum);
}

int checkAlphabeticalOrderOfString(){
    char str1[] = "abcd";
    for(int i=0; i<strlen(str1)-2; i++){
        if(str1[i]>str1[i+1]){
            int temp = str1[i];
            str1[i] = str1[i+1];
            str1[i+1] = temp;
            i-=2;
        }
    }
    printf("%d\n", !(strcmp(str1, "abcd")));
    printf("%s\n", str1);
}

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}



int main(){
    // printHello();
    // sum(24,25);
    // largest(12,45,10);
    // evenOdd(26);
    // factorial(5);
    // reverseNumber(12345);
    // palindrome(); 
    // printf("%d\n", checkPrime(15));
    // Fibonacci(10);
    // leapyear(2020);
    // sumelement();
    // printf("%d\n", findlargest());
    // printf("%d\n", stringlength("Hello World!"));
    // printf("%d\n", perfectSquare(16));
    // SecondLargest();
    // averageOfArray();
    // calculatepower(2, 10);
    // printPrime(2, 40);
    // reverserData();
    // countVowelAndConsonents("This is a string");
    // sumOfFirstNNaturalNumber(10);
    // getAscii('c');
    // swapWithoutThird(10, 20);
    // swapWithThird(10, 20);
    // countTheNumberofDigit(123);
    // checkValidation("This is a string 99");
    // celToFer(3.5);
    // FerToCel(37.40);
    // simpleCalc(2,3,'*');
    // checkArmstrong(1634);
    // sumOfDigit(123);
    // checkAlphabeticalOrderOfString();
    // printf("%d\n", lcm(12,6));
    // printf("%d\n", gcd(12,6));

}