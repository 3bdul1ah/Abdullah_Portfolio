import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
import math

# --- Style for scientific papers ---
mpl.rcParams.update({
    'font.family': 'serif',
    'font.size': 13,
    'axes.labelsize': 14,
    'axes.titlesize': 15,
    'legend.fontsize': 12,
    'xtick.labelsize': 12,
    'ytick.labelsize': 12,
    'lines.linewidth': 2,
    'figure.dpi': 150
})

# --- Define square path (1m x 2m) ---
def generate_ground_truth():
    return [(0, 0), (1, 0), (1, 2), (0, 2), (0, 0)]

# --- Add noise and drift ---
def simulate_odom(path, noise_std=0.02, drift=(0.01, -0.005)):
    drift_x, drift_y = 0.0, 0.0
    sim = []
    for x, y in path:
        drift_x += drift[0]
        drift_y += drift[1]
        x_sim = x + np.random.normal(0, noise_std) + drift_x
        y_sim = y + np.random.normal(0, noise_std) + drift_y
        sim.append((x_sim, y_sim))
    return sim

# --- Error metric (Euclidean) ---
def compute_error(gt, est):
    return np.mean([
        math.hypot(gx - ex, gy - ey)
        for (gx, gy), (ex, ey) in zip(gt, est)
    ])

# --- Plotting ---
def plot(gt, enc, filt, err_enc, err_filt):
    fig, ax = plt.subplots(figsize=(7, 5.5))

    ax.plot(*zip(*gt), '--o', label="Ground Truth", color="black", markersize=6)
    ax.plot(*zip(*enc), '-s', label=f"Encoder Odometry\n(mean error: {err_enc:.2f} m)", color="#D55E00", markersize=6)
    ax.plot(*zip(*filt), '-^', label=f"Filtered Odometry\n(mean error: {err_filt:.2f} m)", color="#0072B2", markersize=6)

    ax.set_title("Odometry Comparison on Square Path (1m x 2m)")
    ax.set_xlabel("X (m)")
    ax.set_ylabel("Y (m)")
    ax.grid(True, linestyle='--', alpha=0.5)
    ax.axis('equal')
    ax.legend(loc="upper left")
    plt.tight_layout()
    plt.show(block=True)

# --- Run everything ---
if __name__ == "__main__":
    np.random.seed(1)

    ground_truth = generate_ground_truth()
    encoder_odom = simulate_odom(ground_truth, noise_std=0.03, drift=(0.01, 0.005))
    filtered_odom = simulate_odom(ground_truth, noise_std=0.01, drift=(0.003, 0.001))

    err_enc = compute_error(ground_truth, encoder_odom)
    err_filt = compute_error(ground_truth, filtered_odom)

    plot(ground_truth, encoder_odom, filtered_odom, err_enc, err_filt)
