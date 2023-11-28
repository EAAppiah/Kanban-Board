<template>
    <!-- <div>
        <h1>Good evening, Captain</h1>
        <div class="parent">
            <div class="div1"> </div>
            <div class="div2"> </div>
            <div class="div3"> </div>
            <div class="div4"> </div>
            <div class="div5"> </div>
            <div class="div6"> </div>
            <div class="div7"> </div>
        </div>
    </div> -->
</template>

<style>

.parent>div {
    background-color: white;
    /* Set background color to white */
}

.parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 8px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

.div3 {
    grid-area: 2 / 1 / 3 / 2;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

.div4 {
    grid-area: 2 / 1 / 3 / 2;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

.div5 {
    grid-area: 2 / 1 / 3 / 2;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

.div6 {
    grid-area: 1 / 1 / 2 / 2;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

.div7 {
    grid-area: 1 / 2 / 2 / 3;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
</style>