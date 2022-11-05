jQuery(function(){
$('<div id = calc><div id = text_change></div><div></div><div></div><div></div><div></div><div></div></div>').prependTo('body'); 
$('div:eq(2)').append('<button>AС</button><button>√</button><button>^</button><button>*</button>'); 
$('div:eq(3)').append('<button>1</button><button>2</button><button>3</button><button>/</button>'); 
$('div:eq(4)').append('<button>4</button><button>5</button><button>6</button><button>+</button>');
$('div:eq(5)').append('<button>7</button><button>8</button><button>9</button><button>-</button>');
$('div:eq(6)').append('<button>.</button><button>0</button><button>%</button><button>=</button>');
$("button").addClass("btn");
$("div:eq(2)").addClass("display") 
$("button:eq(4), button:eq(5), button:eq(6), button:eq(8), button:eq(9), button:eq(10), button:eq(12), button:eq(13), button:eq(14), button:eq(16), button:eq(17)").click(function() { 
Print(this.innerText);
});

$("button:eq(0)").click(function() { 
clearForm();
});

$("button:eq(19)").click(function() { 
Calculation();
});

$("button:eq(1), button:eq(2), button:eq(3), button:eq(7), button:eq(11), button:eq(15), button:eq(18)").click(function() { 
Operation(this.innerText);
});

let first,second, op;
let tabl = document.getElementById('text_change'); 

function Calculation() {
    second = tabl.innerText;
    switch(op){
        case "+":
        answer = (+first) + (+second);
        break;
        case "-":
        answer = (+first) - (+second);
        break;
        case '*':
        answer = (+first) * (+second);
        break;
        case '/':
        if(second === '0'){
            tabl.innerText = 'ERROR';
            return;
        }
        answer = (+first) / (+second);
        break;
        case '%':
        answer = (+first) % (+second);
        break;
        case '^':
        answer = Math.pow(+first, +second);
        break;
        case '√':
        answer = Math.sqrt(+first);
        break;
    }
    tabl.innerText = answer;
}

function Print(num){
    tabl.innerText += num;
}

function clearForm(){
    tabl.innerText = " ";
}

function Operation(string){ 
    first = document.getElementById('text_change').innerText;
    op = string;
    tabl.innerText = "";
}
});