console.log('script.js loaded');


// Elements
var roll_button = document.getElementById('roll_button');
var add_dice_button = document.getElementById('add-dice-button');
var output_log = document.getElementById('output-log');
var dice_container = document.getElementById('dice-container');

// Variables
var dice_index = 1;

// Listerners
add_dice_button.addEventListener('click', add_dice );
roll_button.addEventListener('click', calculate_rolls);


function calculate_rolls() {

    console.log(`Calculating rolls`);

    // Get dice
    var dice_array = dice_container.getElementsByClassName('dice');

    var quantity = document.getElementById('quantity').value;
    var results = `Rolling ${dice_array.length} dice ${quantity} times`;


    console.log( dice_array );

    // Loop
    for (var i = 0; i < dice_array.length; i++) {

        
        // Variables
        current_die = dice_array[i];
        current_value = parseInt( current_die.getElementsByClassName('value')[0].value );
        current_modifier = parseInt( current_die.getElementsByClassName('modifier')[0].value );
        current_total = 0;
        current_average = 0;
        
        // Start rolling
        for (var x = 0; x < quantity; x++) {
            
            var roll_value = Math.floor((Math.random() * current_value) + 1);
            var roll_with_modifier = roll_value + current_modifier;
            
            current_total = current_total + roll_with_modifier
            
        }
        
        current_average = current_total / quantity;

        results = results + `<br>Rolling die [${i+1}/${dice_array.length}] [D${current_value}+${current_modifier}] [Total = ${current_total}] [Average = ${current_average}]`

        
    }
    
    output_log.innerHTML = results;

}



function add_dice(){

    console.log( 'Adding dice' );

    var dice_template = `
    <div class="flex__item">
        <div class="dice" data-index="${dice_index}">
            <h2>Dice #${dice_index}</h2>
            <p>
                <label for="">Dice</label>
                <select class="value">
                    <option value="4">D4</option>
                    <option value="6">D6</option>
                    <option value="8">D8</option>
                    <option value="10">D10</option>
                    <option value="12">D12</option>
                    <option value="20">D20</option>
                </select>
            </p>
            <p>
                <label for="">Modifier</label>
                <input class="modifier" type="number" value="0">
            </p>
        </div>
    </div>
    `;

    dice_container.insertAdjacentHTML( 'beforeend' , dice_template );
    dice_index++;

}

// Add first die
add_dice();