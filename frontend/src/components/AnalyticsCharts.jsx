import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

function AnalyticsCharts({
  countries,
  remoteData,
}) {
  return (
    <>
      {/* Countries Chart */}

      <div
        style={{
          background: "#111827",
          border: "1px solid #1F2937",
          borderRadius: "16px",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            color: "white",
            marginBottom: "20px",
          }}
        >
          Top Countries
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >
          <BarChart data={countries}>
            <XAxis dataKey="_id" />
            <YAxis />

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #374151",
                color: "white",
              }}
            />

            <Bar
              dataKey="count"
              fill="#3B82F6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Remote Distribution */}

      <div
        style={{
          background: "#111827",
          border: "1px solid #1F2937",
          borderRadius: "16px",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            color: "white",
            marginBottom: "20px",
          }}
        >
          Remote Distribution
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >
          <PieChart>
            <Pie
              data={remoteData}
              dataKey="count"
              nameKey="_id"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {remoteData.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #374151",
                color: "white",
              }}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default AnalyticsCharts;