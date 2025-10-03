player.onChat("POZO", function () {
    INSTALACION()
    HACERMURO()
})
function excavar () {
    agent.move(FORWARD, 1)
    agent.move(LEFT, 1)
    for (let index = 0; index < 4; index++) {
    	
    }
}
function HACERMURO () {
    agent.setSlot(1)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        }
        agent.turn(LEFT_TURN)
    }
}
function INSTALACION () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 1)
    agent.setItem(DIAMOND_BLOCK, 9, 1)
    agent.setItem(ICE, 8, 0)
}
