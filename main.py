score = 0
streak = 0
guess = 5
target = 0
attempts_left = 4
max_guess = 9
range_unlocked = False


def draw_guess():
    basic.clear_screen()

    if guess == 0:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
    elif guess == 1:
        basic.show_leds("""
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            """)
    elif guess == 2:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            """)
    elif guess == 3:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif guess == 4:
        basic.show_leds("""
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            """)
    elif guess == 5:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif guess == 6:
        basic.show_leds("""
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            """)
    elif guess == 7:
        basic.show_leds("""
            . # # # .
            . . . # .
            . . # . .
            . . # . .
            . . # . .
            """)
    elif guess == 8:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            """)
    elif guess == 9:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif guess == 10:
        basic.show_leds("""
            # # # # .
            # # . # .
            # # . # .
            # # . # .
            # # # # .
            """)
    elif guess == 11:
        basic.show_leds("""
            # . # . .
            # # # . .
            # . # . .
            # . # . .
            # # # # .
            """)
    elif guess == 12:
        basic.show_leds("""
            # # # # .
            # . . # .
            # # # # .
            # # . . .
            # # # # .
            """)
    elif guess == 13:
        basic.show_leds("""
            # # # # .
            # . . # .
            # # # # .
            # . . # .
            # # # # .
            """)
    elif guess == 14:
        basic.show_leds("""
            # # . # .
            # # . # .
            # # # # .
            # . . # .
            # . . # .
            """)
    elif guess == 15:
        basic.show_leds("""
            # # # # .
            # # . . .
            # # # # .
            # . . # .
            # # # # .
            """)
    elif guess == 16:
        basic.show_leds("""
            # # # # .
            # # . . .
            # # # # .
            # # . # .
            # # # # .
            """)
    elif guess == 17:
        basic.show_leds("""
            # # # # .
            # . . # .
            # . # . .
            # . # . .
            # . # . .
            """)
    elif guess == 18:
        basic.show_leds("""
            # # # # .
            # # . # .
            # # # # .
            # # . # .
            # # # # .
            """)
    else:
        basic.show_leds("""
            # # # # .
            # # . # .
            # # # # .
            # . . # .
            # # # # .
            """)

    if guess < 10:
        led.plot_brightness(0, 0, 8)
        led.plot_brightness(0, 1, 8)
        led.plot_brightness(0, 2, 8)
        led.plot_brightness(0, 3, 8)
        led.plot_brightness(0, 4, 8)

        if attempts_left >= 1:
            led.plot_brightness(0, 4, 120)
        if attempts_left >= 2:
            led.plot_brightness(0, 3, 120)
        if attempts_left >= 3:
            led.plot_brightness(0, 2, 120)
        if attempts_left >= 4:
            led.plot_brightness(0, 1, 120)

        led.plot_brightness(4, 0, 8)
        led.plot_brightness(4, 1, 8)
        led.plot_brightness(4, 2, 8)
        led.plot_brightness(4, 3, 8)
        led.plot_brightness(4, 4, 8)

        if streak >= 1:
            led.plot_brightness(4, 4, 255)
        if streak >= 2:
            led.plot_brightness(4, 3, 255)
        if streak >= 3:
            led.plot_brightness(4, 2, 255)
        if streak >= 4:
            led.plot_brightness(4, 1, 255)
        if streak >= 5:
            led.plot_brightness(4, 0, 255)
    else:
        led.plot_brightness(4, 0, 8)
        led.plot_brightness(4, 1, 8)
        led.plot_brightness(4, 2, 8)
        led.plot_brightness(4, 3, 8)
        led.plot_brightness(4, 4, 8)

        if attempts_left >= 1:
            led.plot_brightness(4, 4, 120)
        if attempts_left >= 2:
            led.plot_brightness(4, 3, 120)
        if attempts_left >= 3:
            led.plot_brightness(4, 2, 120)
        if attempts_left >= 4:
            led.plot_brightness(4, 1, 120)


basic.show_string("GUESS")
basic.show_leds("""
    . # # # .
    # . . . #
    . . # . .
    . . . . .
    . . # . .
    """)
basic.pause(450)
basic.show_string("A- B+ AB=OK")
basic.show_string("80PTS=0-19")

if range_unlocked:
    max_guess = 19
    guess = 10
else:
    max_guess = 9
    guess = 5

target = randint(0, max_guess)
attempts_left = 4
draw_guess()

while True:
    if input.button_is_pressed(Button.AB):
        while input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
            basic.pause(20)

        if guess == target:
            round_points = 10 + attempts_left * 2 + streak * 3
            score = score + round_points
            streak = streak + 1

            basic.show_icon(IconNames.YES)
            basic.pause(180)
            basic.show_leds("""
                . . # . .
                . # . # .
                # . # . #
                . # . # .
                . . # . .
                """)
            basic.pause(130)
            basic.show_icon(IconNames.DIAMOND)
            basic.pause(130)
            basic.show_icon(IconNames.SMALL_DIAMOND)
            basic.pause(90)
            basic.show_icon(IconNames.DIAMOND)
            basic.pause(130)
            basic.show_string("+")
            basic.show_number(round_points)

            if range_unlocked == False and score >= 80:
                range_unlocked = True
                basic.show_string("LVL2")
                basic.show_leds("""
                    # # # # .
                    # # . # .
                    # # # # .
                    # . . # .
                    # # # # .
                    """)
                basic.pause(180)
                basic.show_leds("""
                    # # # # .
                    # # . # .
                    # # . # .
                    # # . # .
                    # # # # .
                    """)
                basic.pause(180)
                basic.show_string("0-19")

            if streak >= 3:
                basic.show_string("S")
                basic.show_number(score)
                basic.show_string("X")
                basic.show_number(streak)

            if range_unlocked:
                max_guess = 19
                guess = 10
            else:
                max_guess = 9
                guess = 5

            target = randint(0, max_guess)
            attempts_left = 4
            draw_guess()
        else:
            attempts_left = attempts_left - 1

            if attempts_left <= 0:
                streak = 0
                basic.show_icon(IconNames.SAD)
                basic.pause(450)
                basic.show_string("ANS")
                basic.show_number(target)

                if range_unlocked:
                    max_guess = 19
                    guess = 10
                else:
                    max_guess = 9
                    guess = 5

                target = randint(0, max_guess)
                attempts_left = 4
                draw_guess()
            else:
                if guess < target:
                    basic.show_arrow(ArrowNames.NORTH)
                else:
                    basic.show_arrow(ArrowNames.SOUTH)
                basic.pause(320)
                draw_guess()

    elif input.button_is_pressed(Button.B):
        basic.pause(60)
        if input.button_is_pressed(Button.A) == False:
            if guess < max_guess:
                guess = guess + 1
                draw_guess()
                basic.pause(70)
                basic.clear_screen()
                basic.pause(45)
                draw_guess()
            else:
                basic.clear_screen()
                basic.pause(60)
                draw_guess()

            while input.button_is_pressed(Button.B):
                basic.pause(20)

    elif input.button_is_pressed(Button.A):
        basic.pause(60)
        if input.button_is_pressed(Button.B) == False:
            if guess > 0:
                guess = guess - 1
                draw_guess()
                basic.pause(70)
                basic.clear_screen()
                basic.pause(45)
                draw_guess()
            else:
                basic.clear_screen()
                basic.pause(60)
                draw_guess()

            while input.button_is_pressed(Button.A):
                basic.pause(20)

    basic.pause(25)
