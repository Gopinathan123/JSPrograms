let openAccount=
{
    Firstname:'abc',
    Lastname:'x',
    DOB:'10/10/2010',
    PanNo:'abcX2156xyz',
    CitizanshipNo:'123abc',
    Location:['T.Nagar','N.Pakkam','Central'],
    State:'TamilNadu',
    City:'Chennai',
    Nominee:'mnop',
    AccountType:'Saving'
}
for (const key in openAccount) {
    if (openAccount.hasOwnProperty.call(openAccount, key)) {
        const element = openAccount[key];
        console.log(element);
        
    }
}
//console.log(openAccount);
openAccount.Location='Kodampakkam';
//delete openAccount.Location//'T.Nagar'
//console.log(openAccount);*/