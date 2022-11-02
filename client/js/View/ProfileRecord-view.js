import { View } from './View.js';

export class ProfileRecordView extends View {
    template() {return `
    <div class="records-header">
      <h2 class="records-title"> Your latest records </h2>
      <a href="records.html">
        <span>Go to records page</span>
        <svg class="records-expand-icon"><use xlink:href="./images/icons.svg#icon-expand"></use></svg>
      </a>
    </div>
    <div>
        <ul class="profile-record-list">
        ${this.recordSelection.map(item => {return `
        <li class="profile-record-list-item" data-profile-record-item>
            <p class="profile-record-date">${item.date}</p>
            <div>
                <h3 class="profile-record-type">${item.type}</h3>
                <h4 class="profile-record-item">${item.item}</h4>
            </div>
            <p class="profile-record-value">${item.value}</p>
            <span>${this.supportReference(item)}</span>
            <span>${this.supportResult(item)}</span>
        </li>
        `}).join("")}
        </ul>
    </div>
    `}
    
    supportReference(item) {
        if (item.reference === "over") {
            return `<svg class="record-reference-icon"><use xlink:href="./images/icons.svg#icon-up"></use></svg>`
        } else if (item.reference === "under") {
            return `<svg class="record-reference-icon"><use xlink:href="./images/icons.svg#icon-down"></use></svg>`
        } else {
            return `<svg class="record-reference-icon"><use xlink:href="./images/icons.svg#icon-equal"></use></svg>`
        }
    }

    supportResult(item) {
        if (item.result === "positive") {
            return `<svg class="record-result-icon positive"><use xlink:href="./images/icons.svg#icon-sunny-weather"></use></svg>`
        } else if (item.result === "negative") {
            return `<svg class="record-result-icon negative"><use xlink:href="./images/icons.svg#icon-bad-weather"></use></svg>`
        } else {
            return `<svg class="record-result-icon"><use xlink:href="./images/icons.svg#icon-cloud-weather"></use></svg>`
        }
    }

    get recordSelection(){
        return [
            {id: 0,
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "over",
            result: "negative",
            },
            {id: 1, 
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "under",
            result: "negative",
            },
            {id: 2,
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "over",
            result: "positive",
            },
            {id: 3, 
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "under",
            result: "positive",
            },
            {id: 4,
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "equal",
            result: "regular",
            },
            {id: 5, 
            date: "20/02/2022",
            type:"Measure",
            item:"Bioimpedancy",
            value: "20%",
            reference: "equal",
            result: "negative",
            }
        ]
    }

    recordModalTemplate() {return `
    <div class="modal fade" id="recordModal" tabindex="-1" aria-labelledby="recordModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="recordModalLabel">Record</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" data-modal-body>
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `}

    navigation() {
        let modal = document.querySelector('[data-modal]');
        modal.innerHTML = this.recordModalTemplate();
        let records = document.querySelectorAll('[data-profile-record-item]');
        records.forEach((record, index) => {
            record.addEventListener('click', (event) =>{
                this.recordModalTemplate();
                let myModal = new bootstrap.Modal(document.getElementById('recordModal'));
                myModal.show();
                let modalBody = document.querySelector('[data-modal-body]');
                modalBody.innerHTML = this.innerModal(index)
            });
        });
    }

    innerModal(id) {
        let record = this.recordSelection.find(element => element.id === id);
        return `
        <div>${record.date}</div>
        <div>${record.type}</div>
        <div>${record.item}</div>
        <div>${record.value}</div>
        <div>${record.reference}</div>
        <div>${record.result}</div>
    `}
}
