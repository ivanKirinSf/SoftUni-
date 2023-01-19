function vacantion(count, type, day) {

    let totalPrice = 0;


    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    totalPrice = count * 8.45;

                    if (count >= 30) {
                        totalPrice *= 0.85;
                    } break;
                case "Saturday":
                    totalPrice = count * 9.80;

                    if (count >= 30) {
                        totalPrice *= 0.85;
                    } break;
                case "Sunday":
                    totalPrice = count * 10.46;
                    if (count >= 30) {
                        totalPrice *= 0.85;
                    } break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    totalPrice = count * 10.90;

                    if (count >= 100) {
                        totalPrice = (count - 10) * 10.90;

                    } break;
                case "Saturday":
                    totalPrice = count * 15.60;

                    if (count >= 100) {
                        totalPrice = (count - 10) * 15.60;

                    } break;
                case "Sunday":
                    totalPrice = count * 16;

                    if (count >= 100) {
                        totalPrice = (count - 10) * 16;

                    } break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    totalPrice = count * 15;

                    if (count >= 10 && count <= 20) {
                        totalPrice *= 0.95;
                    } break;
                case "Saturday":
                    totalPrice = count * 20;

                    if (count >= 10 && count <= 20) {
                        totalPrice *= 0.95;
                    } break;
                case "Sunday":
                    totalPrice = count * 22.50;

                    if (count >= 10 && count <= 20) {
                        totalPrice *= 0.95;
                    }
            }
            break;



    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}


vacantion(30,
    "Students",
    "Sunday")

vacantion(30,
    "Business",
    "Sunday")

vacantion(40,
    "Regular",
    "Saturday")
