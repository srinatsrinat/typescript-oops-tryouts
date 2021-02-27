var movie = /** @class */ (function () {
    function movie(defTitle, defStudio, defRating) {
        this.defRating = 'PG';
        this.newArr = [];
        this.studio = defStudio;
        this.title = defTitle;
        if (!defRating)
            this.rating = this.defRating;
        else
            this.rating = defRating;
        console.log(this.title, this.studio, this.rating);
    }
    movie.prototype.getPG = function (arr) {
        for (var item in arr) {
            if (arr[item].rating == 'PG') {
                this.newArr.push(arr[item]);
            }
        }
        return this.newArr;
    };
    return movie;
}());
var a = new movie('Casino Royale', 'Eon Productions', 'PG13');
var b = new movie('Dummy title', 'Test studio', '');
var a1 = new movie('abcd', 'perppermuint', 'RR');
var a2 = new movie('abcd1234', 'potify', 'PG13');
var a3 = new movie('powder', 'fandango', 'PG');
var a4 = new movie('lingling', 'tomatoes', 'PG');
var mainArr = [a, b, a1, a2, a3, a4];
console.log(mainArr);
var c = new movie('', '', '');
var d = c.getPG(mainArr);
console.log(d);
