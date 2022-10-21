export function getRecordTabel(
  ID: number,
  Date: any,
  title: string,
  notes: string
) {
  //THIS IS FIRST ROW / SEPARATOR /LAST ROW
  let starter: string = "8---------------------------------------8";
  let separator: string = "|---------------------------------------|";
  let lastRow: string = "<3--------------------------------------<3 ";

  let space: string = " ";
  let fullLength: number = starter.length;
  //console.log(fullLength);

  function getRow(rowTopic: string) {
    let Row: string = `| ${rowTopic}`;
    let RowLength: number = Row.length;

    let result: string = ``;

    if (RowLength < fullLength) {
      let spacesForRow: string = "";
      let spacesLength: any = fullLength - RowLength - 1;
      for (let i = 0; i < spacesLength; i++) {
        spacesForRow += space;
      }
      result = `${Row}${spacesForRow}|`;
    } else {
    }
    console.log(result);
  }

  console.log(starter);
  getRow(`${ID}`);
  console.log(separator);
  getRow(`${Date}`);
  console.log(separator);
  getRow(`${title}`);
  console.log(separator);
  getRow(`${notes}`);
  console.log(lastRow);
}

/*     8---------------------------------------8
        | ID | 3                                |     
        |---------------------------------------|
        | 11.11.2022                            |
        |---------------------------------------|
        | Najlepsi den zivota                   |
        |---------------------------------------|
        |   Tu pojde text blablabla blablabla   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        |    poznamky z daneho dna blablablab   |
        <3--------------------------------------<3 
*/

getRecordTabel(
  3,
  "11.11",
  "Hello",
  "vnfu diy nfejskabc iejhvreihlnvji rvhbreilg bhil vhrueibv iwbvijreqn jvibetow ihbtielnfjrwkôa gu"
);
