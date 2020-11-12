<template>
  <div class="">
    <div :key="info" v-for="info in infos" class="body pt-2 d-flex justify-content-between align-items-center">
      <div class="w-40 d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center a pt-2 pl-3 cursor">
          <div>
            <img width="35" height="35" v-bind:src="info.market[0].image" alt="">
          </div>
          <div class="ml-2">
            <h3>{{info.market[0].name}}</h3>
            <p>{{info.market[0].price}}</p>
            <p class="d-none"></p>
          </div>
        </div>
        <div class="d-none d-flex align-items-center change w-30">
          <div>
            <p class="large ml-2">4.95</p>
            <p><i class="fas fa-caret-up"></i>[1.22%]</p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-around align-items-center w-60">
        <div class="sell cursor">
          <div class="mt-2 d-flex">
            <p class="d-none s-box">{{ info.sell[0].letter }}</p>
            <p class="p-block">{{ info.sell[0].figure }}</p>
          </div>
        </div>
        <div class="sell mleft cursor">
          <div class="mt-2 d-flex">
            <p class="d-none s-box">{{ info.buy[0].letter }}</p>
            <p class="p-block">{{ info.buy[0].figure }}</p>
          </div>
        </div>
        <div class="d-flex d-none justify-content-between align-items-center w-25 pl-2 sentiment">
          <div>
            <div class="d-flex align-items-center">
              <h3 class="mb-1">98%</h3>
              <p class="mb-1">BUYING</p>
            </div>
            <div>
              <div class="bar">
                <span></span>
              </div>
            </div>
          </div>
          <div>
            <i class="fas fa-ellipsis-v cursor"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="p-3 shadow add cursor">
      <p class="text-center"><i class="fas fa-folder-plus mr-2"></i>ADD MARKETS</p>
    </div>
    <div class="d-flex justify-content-between align-items-center peopleHead">
      <div class="w-30 d-flex justify-content-between align-items-center">
        <div>
          <p>PEOPLE</p>
        </div>
        <div class="d-none">
          <p>CHANGE
            <span>1M
              <i class="fas fa-sort"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="d-flex w-60 justify-content-around align-items-center">
        <p>RISK SCORE</p>
        <p class="d-none-xl">CHANGE
          <span>1M
            <i class="fas fa-sort"></i>
          </span>
        </p>
        <p class="d-none">INVESTORS</p>
      </div>
    </div>
    <div :key="secondInfo" v-for="secondInfo in secondInfos" class="d-flex justify-content-between align-items-center b">
      <div class="d-flex align-items-center justify-content-between py-3 pl-3 w-40">
        <div class="d-flex align-items-center">
          <div class="mr-2">
            <img width="35" height="35" v-bind:src="secondInfo.people[0].image" alt="">
          </div>
          <div class="people">
            <h3>{{secondInfo.people[0].name}}</h3>
            <p>{{secondInfo.people[0].info}}</p>
            <p class="d-none"></p>
          </div>
        </div>
        <div class="w-30 d-none">
          <p class="d">0.45%</p>
        </div>
      </div>
      <div class="w-60 d-flex align-items-center justify-content-around">
        <div>
          <p class="risk-p">{{secondInfo.risk[0].risk}}</p>
        </div>
        <div class="w-40 d-flex justify-content-around">
          <p class="copy d-none cursor">COPY</p>
          <p class="change-p">{{secondInfo.change[0].percent}}</p>
        </div>
      </div>
    </div>
    <div class="discover-p add cursor">
      <p>
        <i class="far fa-address-card mr-1"></i>
        DISCOVER PEOPLE
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      infos: [
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/tsla/150x150.png',
              name: 'TSLA',
              price: '-15.48[-3.65%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '407.89'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '432.89'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/aapl/150x150.png',
              name: 'AAPL',
              price: '-5.48[-4.65%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '110.89'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '112.89'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/nvda/150x150.png',
              name: 'NVDA',
              price: '-30.48[-5.65%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '505.69'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '506.39'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/5958/150x150.png',
              name: 'ZM',
              price: '-23.28[-2.65%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '515.69'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '516.83'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/4489/150x150.png',
              name: 'NIO',
              price: '-0.78[-1.65%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '27.19'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '27.54'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/fb/150x150.png',
              name: 'FB',
              price: '-15.68[-5.65%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '267.69'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '268.11'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/5664/150x150.png',
              name: 'JMIA',
              price: '-0.18[-0.65%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '17.39'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '17.59'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/goog/150x150.png',
              name: 'GOOG',
              price: '-87.70[-5.35%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '1515.69'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '1516.39'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/nsdq100/150x150.png',
              name: 'NSDQ100',
              price: '-378.38[-3.65%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '11192.19'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '11194.50'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/oil/150x150.png',
              name: 'OIL',
              price: '-1.54[-3.61%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '37.41'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '37.46'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/gold/150x150.png',
              name: 'GOLD',
              price: '-30.78[-1.61%]'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '18877.05'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '1877.50'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/dj30/150x150.png',
              name: 'DJ30',
              price: '-777.00[-2.8...'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '13165.89'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '13165.99'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/btc/150x150.png',
              name: 'BTC',
              price: '-479.99[-3.5...'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '13174.85'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '13247.23'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/eth-usd/150x150.png',
              name: 'ETHEREUM',
              price: '-17.1833[-4...'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '382.3254'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '388.4322'
            }
          ]
        },
        {
          market: [
            {
              image: 'https://etoro-cdn.etorostatic.com/market-avatars/100003/150x150.png',
              name: 'XRP',
              price: '-0.0061[-2.4...'
            }
          ],
          sell: [
            {
              letter: 'S',
              figure: '0.2419'
            }
          ],
          buy: [
            {
              letter: 'S',
              figure: '0.2419'
            }
          ]
        }
      ],
      secondInfos: [
        {
          people: [
            {
              image: 'https://etoro-cdn.etorostatic.com/avatars/150X150/3180395.jpg',
              name: 'MarianoPardo',
              info: 'Mariano Daniel Pardo'
            }
          ],
          risk: [
            {
              risk: 5
            }
          ],
          change: [
            {
              percent: '0.35%'
            }
          ]
        },
        {
          people: [
            {
              image: 'https://etoro-cdn.etorostatic.com/avatars/150X150/9214186/3.jpg',
              name: 'SparkLiang',
              info: 'Teoh Khai Liang'
            }
          ],
          risk: [
            {
              risk: 3
            }
          ],
          change: [
            {
              percent: '-3.43%'
            }
          ]
        },
        {
          people: [
            {
              image: 'https://etoro-cdn.etorostatic.com/avatars/150X150/5572971/2.jpg',
              name: 'InTheGame',
              info: 'Gaming Industry'
            }
          ],
          risk: [
            {
              risk: 5
            }
          ],
          change: [
            {
              percent: '0.35%'
            }
          ]
        },
        {
          people: [
            {
              image: 'https://etoro-cdn.etorostatic.com/avatars/150X150/918269/2.jpg',
              name: 'eToroTeam',
              info: 'eToro Team'
            }
          ],
          risk: [
            {
              risk: 2
            }
          ],
          change: [
            {
              percent: '3.49%'
            }
          ]
        },
        {
          people: [
            {
              image: 'https://etoro-cdn.etorostatic.com/avatars/150X150/9412304/1.jpg',
              name: 'eToro_Service',
              info: 'eToro Customer Service'
            }
          ],
          risk: [
            {
              risk: 4
            }
          ],
          change: [
            {
              percent: '4.56%'
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body * {
  margin: 0;
  padding: 0;
}
.body {
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  /* padding-bottom: 1rem; */
}
h3 {
  font-size: 1rem;
  font-weight: 700;
}
.ml-2 p {
  font-size: .5rem;
  font-weight: 800;
  color: #DA384C;
}
.p-block {
  background-color: #F1F1F1;
  padding: .6rem .5rem;
  font-size: .8rem;
  font-weight: 700;
  border-radius: 3px;
  width: 70px;
  text-align: center;
}
.add {
  font-weight: 600;
  font-size: 1rem;
  color: #5F6474;
}
.peopleHead {
  background-color: #F7F7F7;
  padding: .5rem 1rem;
  margin-top: .3rem;
  font-weight: 700;
  font-size: .7rem;
  color: #777777;
}
.peopleHead span {
  color: #37ABF6;
}
.people h3 {
  font-size: .8rem;
}
.people p {
  font-size: .6rem;
  font-weight: 700;
}
.b {
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.change-p {
  color: #DA384C;
  font-weight: 500;
}
.risk-p {
  border: 1px solid #E9D045;
  padding: .1rem .5rem;
  border-radius: 4px;
  color: #E9D045;
  font-weight: 500;
}
.discover-p {
  padding: .7rem;
  text-align: center;
  font-weight: 500;
  color: #4C505D;
}
.change p, .d {
  font-weight: 500;
  font-size: .7rem;
  color: #6CAD11;
}
.large {
  font-size: 1.2rem !important;
}
.s-box {
  background-color: #4C505D;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: .6rem .9rem;
  font-size: .8rem;
  text-align: center;
}
.s-box:hover {
  background-color: #27435B;
}
.w-40 {
  width: 40%;
}
.w-60 {
  width: 60%;
}
.w-30 {
  width: 30%;
}
.w-25 {
  width: 25%;
}
.border {
  border: 2px solid blue;
}
.bar {
  width: 120px;
  height: 7px;
  border-radius: 4px;
  background-color: #ED5853;
}
.bar span {
  display: inline-block;
  background-color: #7FB830;
  height: 7px;
  width: 110px;
  position: relative;
  bottom: 11px;
  border-radius: 4px;
}
.sentiment h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-right: .4rem;
}
.sentiment p {
  font-weight: 400;
  font-size: .7rem;
}
.fa-ellipsis-v {
  color: #F1F1F1;
}
.fa-ellipsis-v:hover {
  color: #3D404A;
}
.cursor {
  cursor: pointer;
}
.add:hover {
  color: #86BC3C;
}
.copy {
  background-color: #37ABF6;
  border-radius: 4px;
  padding: .3rem 3rem;
  color: white;
  font-weight: 500;
}
.d {
  font-size: 1rem;
}

@media only screen and (min-width: 1200px) {
  .d-none {
    display: block !important;
  }
  .d-flex {
    display: flex !important;
  }
  .d-none-xl {
    display: none !important;
  }
  .s-box {
    border-radius: 4px 0 0 4px;
  }
  .p-block {
    width: 110px;
    border-radius: 0 4px 4px 0;
  }
  .risk-p {
    margin-left: 4.5rem;
  }
}
</style>
