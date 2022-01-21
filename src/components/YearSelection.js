function YearSelection() {
    return (
        <>
        <h1 style="padding-bottom: auto; text-align: center; font-family: Helvetica; color: #150578; font-size: 35px; font-weight: lighter;"> To Pick a past NCAA Men's Basketball tournament: </h1>
        <div style="margin-top:40px; margin-left: -200px;">
          <select id="year-select" onchange="yearSelected();" style="display: inline;width: 150px;border-radius: 5px; height: 65px;font-size: 21px;margin-right: 35px;">
            <option value="Option 1">Select a year</option>
          </select>
          <h1 style="display: inline; padding-bottom: auto; text-align: center; font-family: Helvetica; color: #150578; font-size: 35px; font-weight: lighter; margin-right: 35px;"> or </h1>
          <button style="display: inline;border-radius: 5px; background: url(./mysterybox.png); height: 64px; width: 65px;" onclick="randomizeYear()"> </button>
          <h1 style="display: inline; padding-bottom: auto; text-align: center; font-family: Helvetica; color: #150578; font-size: 35px; font-weight: lighter; margin-left: 100px;"> or </h1>
          <button style="display: inline;border-radius: 5px; height: 64px; width: 200px; margin-left: 35px; color: #150578; font-size: 16px;" onclick="window.location.href='matchups.html'"> See the extra mad 2011 Tournament </button>
        </div>
        </>
    );
}

export default YearSelection;