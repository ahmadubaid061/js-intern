alert('plz go to console for result!');
console.log('please input one of the following languages;\n1.chinese \n2.mandarin \n3.spanish \n4.english \n5.pashto \n6.arabic \n7.other');
let language=prompt("input a language:");
console.log(language);
switch(language)
{
    case 'chinese':
        {
             console.log('MOST number of native speakers!');
             break;
        }
    case 'mandarin':
        {
            console.log('MOST number of native speakers!');
             break;
        }
    case 'spanish':
        {
            console.log('2nd place in number of native speakers');
            break;
        }
    case 'pashto':
        {
            console.log('Number 4');
            break;
        }
    case 'english':
        {
            console.log('3rd place');
            break;
        }
    case 'arabic':
        {
            console.log('5th most spoken language');
            break;

        }
    default:
        {
            console.log('Great language too !');
            break;
        }

}
