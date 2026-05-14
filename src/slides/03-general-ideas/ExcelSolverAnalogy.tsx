import excelSolver from '../../assets/excel-solver.jpg';

export default function ExcelSolverAnalogy() {
  return (
    <>
      <h2>AI це як Excel Solver</h2>
      <img
        src={excelSolver}
        alt="Excel Solver — діалог Solver Parameters з виділеними полями Set Objective, By Changing Variable Cells, Subject to the Constraints"
        style={{
          display: 'block',
          margin: '0.6em auto 0',
          maxWidth: '100%',
          maxHeight: '14em',
          height: 'auto',
          width: 'auto',
          borderRadius: '0.4em',
        }}
      />
    </>
  );
}
