for having Dev dependencies use -D
^ in dependencies means ki jb nya minor version aayega to apne aap isme upgrade ho jayega
~ in dependencies means ki jb nya major version aayega to apne aap isme upgrade ho jayega


# package.json aur package-lock.json m kya farak h?
package-lock.json keeps track of exact version of installed package
package.json can have ^ or ~ which means approx version


# integrity
It is a hash to verify whatever is on my machine is same as that on production such the code doesn't breaks on production


# transitive dependencies
Dependencies dependent on other depenedencies


if you have package.json and package-lock.json you can recreate all you node modules


# npx
executing a package

cdn is not a preferred way to use react in your app

# browser-list
last-(number)-(browser-name) version OR last-(number) version  {This means all browsers last (number) versions}
last k itne versions of browsers par chlega