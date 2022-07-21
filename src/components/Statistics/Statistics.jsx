import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import makeRandomColor from './randomColor'
const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
                key={id}
               style={{
              backgroundColor: makeRandomColor(),
            }}
                     >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
        </section>
    );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};


export default Statistics; 

