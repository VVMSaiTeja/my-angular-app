import './polyfills.server.mjs';
import{F as R,H as z,I,J as U,K as h,L as B,M as G,N,O as V,P as Y,S as K,W,Z as F,_ as q,a as C,b as $,c as M,d as P,e as y,f as D,g as u,h as L,i as T,j as S,k as s,l as _,m as p,n as d,o,p as a,q as f,r as w,s as A,t as v,u as c,v as l,w as j,x as g,y as H}from"./chunk-NGV32YJM.mjs";var k={production:!1,FOOTBALL_RAPID_API_HOST:"v3.football.api-sports.io",FOOTBALL_RAPID_API_KEY:"43df527add65774cf5db0bcb2a5fe7a1"};var E=(()=>{let e=class e{constructor(){this.url="https://v3.football.api-sports.io/",this.season=new Date().getFullYear().toString()}getApiUrl(){return this.url}getSeason(){return this.season}getHeaders(){return new B().set("x-rapidapi-host",k.FOOTBALL_RAPID_API_HOST).set("x-rapidapi-key",k.FOOTBALL_RAPID_API_KEY)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=y({token:e,factory:e.\u0275fac});let i=e;return i})();var x=(()=>{let e=class e{constructor(n,t){this.http=n,this.apiConfigService=t,this.cacheData={}}getStandings(n,t){return this.cacheData[t]?(console.log(`Returning cached data for ${t}:`,this.cacheData[t]),$(this.cacheData[t])):this.http.get(`${this.apiConfigService.getApiUrl()}standings?league=${n}&season=${this.apiConfigService.getSeason()}`,{headers:this.apiConfigService.getHeaders()}).pipe(M(m=>(this.cacheData[t]=m,m)))}getFixtureStandings(n,t){return this.http.get(`${this.apiConfigService.getApiUrl()}fixtures?league=${n}&season=${this.apiConfigService.getSeason()}&team=${t}&last=10`,{headers:this.apiConfigService.getHeaders()})}};e.\u0275fac=function(t){return new(t||e)(D(G),D(E))},e.\u0275prov=y({token:e,factory:e.\u0275fac});let i=e;return i})();var oe=i=>({active:i});function ae(i,e){if(i&1){let r=w();o(0,"button",3),A("click",function(){let m=L(r).$implicit,O=v();return T(O.selectCountry(m))}),c(1),a()}if(i&2){let r=e.$implicit,n=v();p("ngClass",H(2,oe,r===n.selectedCountry)),s(1),l(r)}}function se(i,e){if(i&1&&(o(0,"th"),c(1),a()),i&2){let r=e.$implicit;s(1),l(r)}}function ce(i,e){if(i&1){let r=w();o(0,"tr",7),A("click",function(){let m=L(r).$implicit,O=v(2);return T(O.selectStandingTeam(m))}),o(1,"td"),c(2),a(),o(3,"td"),f(4,"img",8),a(),o(5,"td"),c(6),a(),o(7,"td"),c(8),a(),o(9,"td"),c(10),a(),o(11,"td"),c(12),a(),o(13,"td"),c(14),a(),o(15,"td"),c(16),a(),o(17,"td"),c(18),a()()}if(i&2){let r=e.$implicit;s(2),l(r.rank),s(2),p("src",r.team.logo,S),s(2),l(r.team.name),s(2),l(r.all.played),s(2),l(r.all.win),s(2),l(r.all.lose),s(2),l(r.all.draw),s(2),l(r.goalsDiff),s(2),l(r.points)}}function le(i,e){if(i&1&&(o(0,"div",4)(1,"table")(2,"thead"),d(3,se,2,1,"th",5),a(),o(4,"tbody"),d(5,ce,19,9,"tr",6),a()()()),i&2){let r=v();s(3),p("ngForOf",r.headers),s(2),p("ngForOf",r.standingsList)}}var Q=(()=>{let e=class e{constructor(n){this.soccerService=n,this.standingsList=[],this.leaugeIds={England:39,Spain:140,Germany:78,France:61,Italy:135},this.headers=["Rank","Logo","Name","Games","Win","Loss","Draw","Goal Difference","Points"],this.countries=["England","Spain","Germany","France","Italy"],this.destroy$=new C,this.soccerService.selectedCountry&&(this.getCountryStandings(this.soccerService.selectedCountry),this.selectedCountry=this.soccerService.selectedCountry)}selectCountry(n){this.selectedCountry=n,this.soccerService.selectedCountry=n,this.getCountryStandings(n)}getCountryStandings(n){this.selectedLeagueId=this.leaugeIds[n],this.soccerService.getStandings(this.selectedLeagueId,n).pipe(P(this.destroy$)).subscribe(t=>{t.response&&Array.isArray(t.response)&&t.response.length>0?this.standingsList=t.response[0]?.league.standings[0]:t.errors&&alert(Object.values(t.errors))})}selectStandingTeam(n){let t={leagueId:this.selectedLeagueId,teamId:n.team.id,teamName:n.team.name};this.soccerService.selectedStandingData=t}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(t){return new(t||e)(_(x))},e.\u0275cmp=u({type:e,selectors:[["app-country-selection"]],standalone:!0,features:[g],decls:5,vars:2,consts:[[1,"container1"],[3,"ngClass","click",4,"ngFor","ngForOf"],["class","container2",4,"ngIf"],[3,"ngClass","click"],[1,"container2"],[4,"ngFor","ngForOf"],["routerLink","teamMatches",3,"click",4,"ngFor","ngForOf"],["routerLink","teamMatches",3,"click"],["id","icon",3,"src"]],template:function(t,m){t&1&&(o(0,"h2"),c(1,"FOOTBALL UPDATES"),a(),o(2,"div",0),d(3,ae,2,4,"button",1),a(),d(4,le,6,2,"div",2)),t&2&&(s(3),p("ngForOf",m.countries),s(1),p("ngIf",m.selectedCountry))},dependencies:[h,z,I,U,F],styles:["button[_ngcontent-%COMP%]{border:none;margin:5px;background:none;font-size:26px}.active[_ngcontent-%COMP%]{color:#00f;text-decoration:underline}th[_ngcontent-%COMP%]{width:200px;text-align:center;font-size:24px}"]});let i=e;return i})();function me(i,e){if(i&1&&(o(0,"th",5),c(1),a()),i&2){let r=e.$implicit;s(1),l(r)}}function pe(i,e){if(i&1&&(o(0,"tr")(1,"td"),f(2,"img",6),a(),o(3,"td"),c(4),a(),o(5,"td"),c(6),a(),o(7,"td"),c(8,"---"),a(),o(9,"td"),c(10),a(),o(11,"td"),c(12),a(),o(13,"td"),f(14,"img",6),a()()),i&2){let r=e.$implicit;s(2),p("src",r.teams.home.logo,S),s(2),l(r.teams.home.name),s(2),l(r.goals.home),s(4),l(r.goals.away),s(2),l(r.teams.away.name),s(2),p("src",r.teams.away.logo,S)}}var X=(()=>{let e=class e{constructor(n){this.soccerService=n,this.fixturesList=[],this.headers=["Logo","Home","Goals","---","Goals","Away","Logo"],this.destroy$=new C,this.selectedStandingData=this.soccerService.selectedStandingData,this.getFixturesData(this.selectedStandingData)}getFixturesData(n){this.soccerService.getFixtureStandings(n.leagueId,n.teamId).subscribe(t=>{t.response?this.fixturesList=t.response:t.errors&&alert(Object.values(t.errors))})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(t){return new(t||e)(_(x))},e.\u0275cmp=u({type:e,selectors:[["app-team-selection"]],standalone:!0,features:[g],decls:11,vars:2,consts:[[1,"container2"],["style","text-align: center; font-size: 26px;",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","center","margin-top","10px"],["routerLink","../",2,"border-radius","5px","width","50px","width","100px","height","30px","font-size","22px","background-color","beige"],[2,"text-align","center","font-size","26px"],["id","icon",3,"src"]],template:function(t,m){t&1&&(o(0,"h2"),c(1,"Team Matches"),a(),o(2,"div",0)(3,"table")(4,"thead"),d(5,me,2,1,"th",1),a(),o(6,"tbody"),d(7,pe,15,6,"tr",2),a()()(),o(8,"div",3)(9,"button",4),c(10,"Back"),a()()),t&2&&(s(5),p("ngForOf",m.headers),s(2),p("ngForOf",m.fixturesList))},dependencies:[h,I,F]});let i=e;return i})();var Z=(()=>{let e=class e{constructor(){this.title="my-angular-app"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[j([E,x]),g],decls:1,vars:0,template:function(t,m){t&1&&f(0,"router-outlet")},dependencies:[h,N,W]});let i=e;return i})();var ee=[{path:"",component:Q},{path:"teamMatches",component:X}];var te={providers:[q(ee),Y()]};var de={providers:[K()]},ie=R(te,de);var fe=()=>V(Z,ie),Qe=fe;export{Qe as a};