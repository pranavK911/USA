/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
using namespace std;
#include<cstring>
void roman(char s[]){
    int ans=0;
      int si = strlen(s);
      int size=si-1;
    // cout<<size;
    for(int i=0;i<=size;++i){
        if(s[i]=='I'){
             if(s[i]<s[i+1]){
                 ans--;
             }
            else{
               ans=ans+1;  
            } 
           
        }
        else if(s[i]=='V'){
            if(s[i]<s[i+1]){
                ans=ans-5;
            }
            else{
                ans=ans+5;
            }
        }
        else if(s[i]=='X'){
            if(s[i]<s[i+1]){
                ans=ans-10;
            }else{
            ans=ans+10;
            }
        }
        else if(s[i]=='L'){
            if(s[i]<s[i+1]){
                ans=ans-50;
            }else{
            ans=ans+50;
        }
        }
         else if(s[i]=='C'){
             if(s[i]<s[i+1]){
                 ans=ans-100;
             }else
                ans=ans+100;
            }
            else if(s[i]=='D'){
               
                ans=ans+500;
            }
            else if(s[i]=='M'){
                ans=ans+1000;
            }
    }
    cout<<ans;
}
int main()
{
    //   char s[]="MCMXCIV ";
    char s[]="XL";
      roman(s);
    return 0;
}
