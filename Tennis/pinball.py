# Author
# https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWRNUnozUWk0b2pIVWFSN0cxMjlVSDRBSkUxUXxBQ3Jtc0tuSXRNZ045NHE5X29oM0s3WDZQY3ZvcnZ5UFFTUWRhTlYwR2VDMXpvTGdtTlFDcFZnam8zeHc0SmpfNkxMbWE3bS1yRVV3Z0c2bzB5bzVad3RmcmFsSzI3bkwzcEI1ZmM5YVVHaHQ4SlR5QXd1MnllYw&q=http%3A%2F%2Fchristianthompson.com%2Fsites%2Fdefault%2Ffiles%2FPong%2Fpong.py   

import turtle

window = turtle.Screen()
window.title("tennis")
window.bgcolor("black")
window.setup(width=800, height=600)
window.tracer(0)

# Left Raquet
raquet_a = turtle.Turtle()
raquet_a.speed(0)
raquet_a.shape("square")
raquet_a.shapesize(stretch_wid=5, stretch_len=1)
raquet_a.color("white")
raquet_a.penup()
raquet_a.goto(-350, 0)

# Right Raquet
raquet_b = turtle.Turtle()
raquet_b.speed(0)
raquet_b.shape("square")
raquet_b.shapesize(stretch_wid=5, stretch_len=1)
raquet_b.color("white")
raquet_b.penup()
raquet_b.goto(350, 0)

# Ball
ball = turtle.Turtle()
ball.speed(1)
ball.shape("square")
ball.color("white")
ball.penup()
ball.goto(0, 0)
ball.dx = 0.2
ball.dy = 0.2

# Players
palyer_a = 0
palyer_b = 0

# Score
score = turtle.Turtle()
score.speed(1)
score.color("white")
score.penup()
score.hideturtle()
score.goto(0, 260)
score.write("Player A: 0 Palyer B: 0", align="center")

# Raquet move
def raquet_a_up():
    y = raquet_a.ycor()
    y += 20
    raquet_a.sety(y)

def raquet_a_down():
    y = raquet_a.ycor()
    y -= 20
    raquet_a.sety(y)

def raquet_b_up():
    y = raquet_b.ycor()
    y += 20
    raquet_b.sety(y)

def raquet_b_down():
    y = raquet_b.ycor()
    y -= 20
    raquet_b.sety(y)

window.listen()
window.onkeypress(raquet_a_up, "w")
window.onkeypress(raquet_a_down, "s")
window.onkeypress(raquet_b_up, "Up")
window.onkeypress(raquet_b_down, "Down")


while True:
    window.update()

    # Ball move
    ball.setx(ball.xcor() + ball.dx)
    ball.sety(ball.ycor() + ball.dy)

    # Border
    if ball.ycor() > 290:
        ball.sety(290)
        ball.dy *= -1

    if ball.ycor() < -290:
        ball.sety(-290)
        ball.dy *= -1

    if ball.xcor() > 390:
        ball.goto(0, 0)
        ball.dx *= -1
        palyer_a += 1
        score.clear()
        score.write("Player A: {} Palyer B: {}".format(palyer_a, palyer_b), align="center")

    if ball.xcor() < -390:
        ball.goto(0, 0)
        ball.dx *= -1
        palyer_b += 1
        score.clear()
        score.write("Player A: {} Palyer B: {}".format(palyer_a, palyer_b), align="center")

    # Raquet collisions
    if (ball.xcor() > 340 and ball.xcor() < 350) and (ball.ycor() < raquet_b.ycor() + 40 and ball.ycor() > raquet_b.ycor() -40):
        ball.setx(340)
        ball.dx *= -1

    if (ball.xcor() < -340 and ball.xcor() > -350) and (ball.ycor() < raquet_a.ycor() + 40 and ball.ycor() > raquet_a.ycor() -40):
        ball.setx(-340)
        ball.dx *= -1