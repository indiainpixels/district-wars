// Dirty code: Discretion Adviced
// By India in Pixels (Ashris Choudhury)
// Please DM me on Instagram if you remix this project :)
// Email: hello@iashris.com

const file = 'districts.json';

const shortForms = {
  'Andaman and Nicobar Islands': 'AN',
  'Andhra Pradesh': 'AP',
  'Arunachal Pradesh': 'AR',
  Assam: 'AS',
  Bihar: 'BR',
  Chandigarh: 'CH',
  Chhattisgarh: 'CT',
  Delhi: 'DL',
  'Dadra & Nagar Haveli': 'DN',
  'Daman & Diu': 'DI',
  Goa: 'GA',
  Gujarat: 'GJ',
  'Himachal Pradesh': 'HP',
  Haryana: 'HR',
  Jharkhand: 'JH',
  'Jammu and Kashmir': 'JK',
  Karnataka: 'KA',
  Kerala: 'KL',
  Ladakh: 'LA',
  Maharashtra: 'MH',
  Meghalaya: 'ML',
  Manipur: 'MN',
  'Madhya Pradesh': 'MP',
  Mizoram: 'MZ',
  Nagaland: 'NL',
  Odisha: 'OD',
  Punjab: 'PB',
  Puducherry: 'PY',
  Rajasthan: 'RJ',
  Sikkim: 'SK',
  Telangana: 'TG',
  'Tamil Nadu': 'TN',
  Tripura: 'TR',
  TT: 'TT',
  UN: 'UN',
  'Uttar Pradesh': 'UP',
  Uttarakhand: 'UT',
  'West Bengal': 'WB',
};

const colorCodes = {
  'Andhra Pradesh': '#e3aafc',
  'Arunachal Pradesh': '#fbabc1',
  Assam: '#f6f1b0',
  Bihar: '#b5e6f0',
  Chhattisgarh: '#fcdfb3',
  Delhi: '#e0e4c9',
  Goa: '#b8f7d8',
  Gujarat: '#b3e5f9',
  'Himachal Pradesh': '#d5ccfd',
  Haryana: '#e5bbb2',
  Jharkhand: '#f8a0a2',
  'Jammu and Kashmir': '#fdbde9',
  Karnataka: '#fc9da6',
  Kerala: '#a9f2ae',
  Ladakh: '#d4dbf8',
  Maharashtra: '#feedb3',
  Meghalaya: '#e5f3af',
  Manipur: '#bfb9f5',
  'Madhya Pradesh': '#d5dfd4',
  Mizoram: '#fbd9bb',
  Nagaland: '#c7fee8',
  Odisha: '#c7f4e4',
  Punjab: '#e3fa93',
  Rajasthan: '#dcdfee',
  Sikkim: '#c6f2fb',
  Telangana: '#dee3f2',
  'Tamil Nadu': '#cfcdee',
  Tripura: '#fef1c7',
  'Uttar Pradesh': '#fdd7d7',
  Uttarakhand: '#eddce2',
  'West Bengal': '#dfc8be',
};

let yrnow = 0;
let inc = 0.04;

function map(n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

function constrain(n, low, high) {
  return Math.max(Math.min(n, high), low);
}

function updateFacet() {
  let data = realData;
  let tot_dist = 0;
  function mergeRandom() {
    const geometries = data.objects.districts.geometries;

    tot_dist = geometries.length;
    document.getElementById(
      'remain'
    ).innerHTML = `${tot_dist} districts remaining`;

    const mp = {};
    const mergedpops = geometries.filter((g) => g.pop);

    mergedpops.forEach((m) => (mp[m.properties.district] = m.pop));
    const top = { ...popz, ...mp };
    const sortedTop10 = Object.entries(top)
      .sort((b, a) => a[1] - b[1])
      .slice(0, 10)
      .map(([dist, pop]) => {
        const corrdist = geometries.find((g) => g.properties.district === dist);
        // if (dist === 'Pune') console.log(corrdist);
        if (!corrdist) return [dist, pop];
        const shortst = dist + ', ' + shortForms[corrdist.properties.st_nm];
        return `<div class="ldr-row"><div>${shortst}</div><div>${
          pop > 10000000
            ? Math.floor(pop / 100000) / 100 + ' Cr'
            : Math.round(pop / 100000) + ' L'
        } </div></div>`;
      })
      .filter((x) => (typeof x === 'string' ? x.startsWith('<div') : false));

    document.getElementById('remainlist').innerHTML = sortedTop10.join('');

    const rando = Math.floor(Math.random() * tot_dist);

    const nbrs = neighbors[rando];
    if (nbrs.length === 0) {
      return;
    }
    const rand_nbr = nbrs[Math.floor(Math.random() * nbrs.length)];

    const rando_nm = geometries[rando].properties.district;
    const nbr_nm = geometries[rand_nbr].properties.district;

    const filtered = geometries.filter(function (d, i) {
      return i === rando || i === rand_nbr;
    });
    const mergedPolygon = topojson.mergeArcs(data, filtered);

    let winner, loser;

    const prando = geometries[rando]?.pop || popz[rando_nm];
    const prandr = geometries[rand_nbr]?.pop || popz[nbr_nm];

    if (prando > prandr) {
      winner = rando;
      loser = rand_nbr;
    } else {
      winner = rand_nbr;
      loser = rando;
    }

    const winnerPolygon = realData.objects.districts.geometries[winner];
    winnerPolygon.arcs = mergedPolygon.arcs;
    winnerPolygon.type = mergedPolygon.type;
    winnerPolygon.pop = prando + prandr;

    let geo = realData.objects.districts.geometries;
    geo[winner] = winnerPolygon;
    geo = geo.filter((v, i) => i !== loser);
    realData.objects.districts.geometries = geo;
    data = realData;
    neighbors = topojson.neighbors(data.objects.districts.geometries);
  }

  mergeRandom();
  if (tot_dist > 40) {
    mergeRandom();
    if (tot_dist > 100) {
      mergeRandom();
      if (tot_dist > 300) {
        mergeRandom();
        if (tot_dist > 500) {
          mergeRandom();
        }
      }
    }
  }

  g.selectAll('.subunit').remove();
  g.selectAll('.subunit2').remove();
  g.selectAll('.subunit-label').remove();
  drawSubUnits(data);
  drawSubUnitLabels(realData);
  const allfx = topojson.feature(data, data.objects.districts).features;

  g.selectAll('.subunit')
    .data(allfx)
    .style('fill', function (d, i) {
      const dname = d.properties.st_nm;
      if (dname in colorCodes) {
        return colorCodes[dname];
      }
      return '#ddd';
    });
}

var width = window.innerWidth,
  height = window.innerHeight;

var projection = d3.geoMercator();

var path = d3.geoPath().projection(projection).pointRadius(2);
var neighbors = [];
var realData = null;

var svg = d3
  .select('#map')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var g = svg.append('g');

d3.json(file, function (error, data) {
  centerZoom(data);
  realData = data;
  neighbors = topojson.neighbors(data.objects.districts.geometries);
  initiateNo();
});

function centerZoom(data) {
  var o = topojson.mesh(data, data.objects.districts, function (a, b) {
    return a === b;
  });

  projection.scale(1).translate([0, 0]);

  var b = path.bounds(o),
    s =
      1 /
      Math.max(
        (b[1][0] - b[0][0]) / width,
        ((b[1][1] - b[0][1]) / height) * 1.04
      ),
    t = [
      (width - s * (b[1][0] + b[0][0])) * 0.41,
      (height - s * (b[1][1] + b[0][1])) * 0.5,
    ];

  var p = projection.scale(s).translate(t);

  return o;
}

function drawOuterBoundary(data, boundary) {
  g.append('path')
    .datum(boundary)
    .attr('d', path)
    .attr('class', 'subunit-boundary')
    .attr('fill', 'none')
    .attr('stroke', '#3a403d');
}

function drawSubUnits(data) {
  var subunits = g
    .selectAll('.subunit')
    .data(topojson.feature(data, data.objects.districts).features)
    .enter()
    .append('path')
    .attr('class', 'subunit')
    .attr('d', path)
    .style('stroke', function (d) {
      return path.area(d) > 3000 ? '#444' : '#777';
    })
    .style('stroke-width', function (d) {
      return path.area(d) > 3000 ? '1px' : '0.8px';
    });

  for (let state in shortForms) {
    const stb = topojson.merge(
      data,
      data.objects.districts.geometries.filter(function (d, i) {
        return d.properties.st_nm === state;
      })
    );
    g.append('path')
      .datum(stb)
      .attr('class', 'subunit2')
      .attr('d', path)
      .style('stroke', '#000')
      .style('fill', 'transparent')
      .style('stroke-width', '1px');
  }
  return subunits;
}

function drawSubUnitLabels(data) {
  g.selectAll('.subunit-label')
    .data(topojson.feature(data, data.objects.districts).features)
    .enter()
    .append('text')
    .attr('class', 'subunit-label')
    .attr('transform', function (d) {
      const [locx, locy] = path.centroid(d);
      const fin = [locx, locy];
      return 'translate(' + fin + ')';
    })
    .attr('dy', '.35em')
    .attr('text-anchor', 'middle')
    .style('font-size', function (d) {
      const area = path.area(d);
      const [[left, top], [right, bottom]] = path.bounds(d);
      const wid = right - left;
      if (wid < 200) {
        const mappedf = map(wid, 20, 200, 0.2, 1);
        const confx = constrain(mappedf, 0.2, 1);
        return confx * 1.2 + 'em';
      } else {
        const mappedf = map(wid, 200, 2000, 1, 1.8);
        const confx = constrain(mappedf, 1, 1.8);
        return confx + 'em';
      }
    })
    .style('fill', (d) => '#222')
    .text(function (d) {
      return d.properties.district;
    });
}

function initiateNo() {
  window.timer = setInterval(updateFacet, 900);
}
