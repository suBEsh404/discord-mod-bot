from random import choice

@bot.command()
async def tod(ctx):
    ur_list = ["Send a picture of ur muscles"]
    await ctx.send(choice(ur_list))