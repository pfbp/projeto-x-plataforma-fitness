import { View } from './View.js';

export class ProfileRecordView extends View {
    template() {return `
    <div>
        <ul class="profile-record-list">
        ${this.recordSelection.map(item => {return `
        <li class="profile-record-list-item">
            <p class="profile-record-date">${item.date}</p>
            <div>
                <h3 class="profile-record-type">${item.type}</h3>
                <h4 class="profile-record-item">${item.item}</h4>
            </div>
            <p class="profile-record-value">${item.value}</p>
            <span class="profile-record-reference">
            ${item => {
                if (item.reference === "over") {
                    `<svg class="record-icon"><use xlink:href="./images/icons.svg#icon-up"></use></svg>`
                } else if (item.reference === "under") {
                    `<svg class="record-icon"><use xlink:href="./images/icons.svg#icon-down"></use></svg>`
                } else {
                    `<svg class="record-icon"><use xlink:href="./images/icons.svg#icon-equal"></use></svg>`
                }
            }}
            </span>
            <span class="profile-record-icon">
            ${item => {
                if (item.result === "positive") {
                    `<svg class="record-icon"><use xlink:href="./images/icons.svg#icon-sunny-weather"></use></svg>`
                } else if (item.result === "negative") {
                    `<svg class="record-icon"><use xlink:href="./images/icons.svg#icon-bad-weather"></use></svg>`
                } else {
                    `<svg class="record-icon"><use xlink:href="./images/icons.svg#icon-cloud-weather"></use></svg>`
                }
            }}
            </span>
        </li>
        `}).join("")}
        </ul>
    </div>
    `}

    get recordSelection(){
        return [
            {id: 1,
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "over",
            result: "negative",
            },
            {id: 2, 
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "over",
            result: "negative",
            },
            {id: 3,
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "over",
            result: "negative",
            },
            {id: 4, 
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "over",
            result: "negative",
            },
            {id: 5,
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "over",
            result: "negative",
            },
            {id: 6, 
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "over",
            result: "negative",
            }
        ]
    }

    navigation() {
        
    }
}