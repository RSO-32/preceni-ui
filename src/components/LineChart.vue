<template>
  <Line
      v-if="loaded"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script>
import {Line} from 'vue-chartjs'
import {CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip} from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

export default {
  name: 'LineChart',
  components: {Line},
  data() {
    return {
      loaded: false,
      chartData: null,
      chartOptions: {
        responsive: true,
      }
    }
  },

  methods: {
    randomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    },

    getRecords() {
      axios.get("http://rso.smole.org/data/products/" + this.$route.params.id).then(response => {

        const product = response.data;

        let records = [];
        for (let i = product.prices.length - 1; i > 0; i--) {
          records.push({
            datetime: product.prices[i].datetime,
            price: product.prices[i].price,
            seller: product.prices[i].seller
          });
        }
        
        let labels = [...new Set(records.map(record => record.datetime.substring(0, 19).replace("T", " ")))];

        let sellers = {};
        records.forEach(record => {
          if (sellers[record.seller] === undefined) {
            sellers[record.seller] = {
              label: record.seller,
              data: [],
              borderColor: this.randomColor(),
            };
          }
          sellers[record.seller].data.push(record.price);
        });

        let datasets = Object.values(sellers);

        this.chartData = {
          "labels": labels,
          "datasets": datasets
        }

        this.loaded = true;
      });
    }
  },

  async mounted() {
    this.getRecords()
  },
}
</script>
