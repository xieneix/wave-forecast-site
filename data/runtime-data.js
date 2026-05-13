window.WAVE_RUNTIME_DATA = {
  "generatedAt": "2026-04-28T22:59:54",
  "registry": {
    "schema_version": 1,
    "selection_rule": "min metrics.mape_test, fallback metrics.best_val_mape, fallback val_metrics.val_mape",
    "output_root": "E:\\PycharmProjects\\graduation\\output",
    "candidate_runs": 2564,
    "models": {
      "bohai": {
        "48": {
          "region": "bohai",
          "horizon": 48,
          "method": "VMD",
          "model_type": "LSTM",
          "selection_score": 0.05288135978056447,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.05288135978056447,
          "best_val_mape": 0.07156128228612146,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105\\run_053cc55e",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105\\run_053cc55e\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105\\run_053cc55e\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 96,
          "hidden_dim": 192,
          "num_layers": 3,
          "nhead": 4,
          "batch_size": 16,
          "drop_ratio": 0.0005445358389140897,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 592.2758371785021,
            "tau": 0.07001684617752411,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\bohai_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "72": {
          "region": "bohai",
          "horizon": 72,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.07726323787683671,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.07726323787683671,
          "best_val_mape": 0.1080427113735117,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212\\run_b68c39f5",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212\\run_b68c39f5\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212\\run_b68c39f5\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 176,
          "hidden_dim": 128,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 16,
          "drop_ratio": 0.006071230558682271,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 603.53609012607,
            "tau": 0.041295820052733696,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\bohai_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "96": {
          "region": "bohai",
          "horizon": 96,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.11562269887796735,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.11562269887796735,
          "best_val_mape": 0.15224377950164672,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622\\run_c266cb2d",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622\\run_c266cb2d\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622\\run_c266cb2d\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 248,
          "hidden_dim": 192,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 64,
          "drop_ratio": 0.0003379900521644254,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 2285.8208245490164,
            "tau": 0.22172544635203673,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\bohai_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        }
      },
      "yellow": {
        "48": {
          "region": "yellow",
          "horizon": 48,
          "method": "VMD",
          "model_type": "TRANSFORMER",
          "selection_score": 0.041715322848743505,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.041715322848743505,
          "best_val_mape": 0.051343763620555476,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214\\run_f5d287da",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214\\run_f5d287da\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214\\run_f5d287da\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 116,
          "hidden_dim": 128,
          "num_layers": 4,
          "nhead": 2,
          "batch_size": 32,
          "drop_ratio": 0.00033727439245672146,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 9,
          "vmd_hparams": {
            "K": 9,
            "alpha": 3395.8905788727325,
            "tau": 0.2650653163318094,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\yellow_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "72": {
          "region": "yellow",
          "horizon": 72,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.046885039371552126,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.046885039371552126,
          "best_val_mape": 0.05541419968968507,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626\\run_faa4b156",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626\\run_faa4b156\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626\\run_faa4b156\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 160,
          "hidden_dim": 128,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 64,
          "drop_ratio": 0.00017918787564294696,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 825.8801783157567,
            "tau": 0.26042223534771664,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\yellow_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "96": {
          "region": "yellow",
          "horizon": 96,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.05653362660475795,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.05653362660475795,
          "best_val_mape": 0.06996706501351524,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021\\run_abae115b",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021\\run_abae115b\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021\\run_abae115b\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 192,
          "hidden_dim": 224,
          "num_layers": 2,
          "nhead": 4,
          "batch_size": 32,
          "drop_ratio": 0.0037647359626538646,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 2671.3777905435627,
            "tau": 0.004736778822879498,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\yellow_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        }
      },
      "east": {
        "48": {
          "region": "east",
          "horizon": 48,
          "method": "VMD",
          "model_type": "TRANSFORMER",
          "selection_score": 0.039814403260396855,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.039814403260396855,
          "best_val_mape": 0.04031388223622378,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455\\run_d9baa362",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455\\run_d9baa362\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455\\run_d9baa362\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 128,
          "hidden_dim": 128,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 128,
          "drop_ratio": 0.025796935842493186,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 9,
          "vmd_hparams": {
            "K": 9,
            "alpha": 595.2089606905668,
            "tau": 0.26118661753952505,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\east_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "72": {
          "region": "east",
          "horizon": 72,
          "method": "VMD",
          "model_type": "LSTM",
          "selection_score": 0.03877862334377191,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.03877862334377191,
          "best_val_mape": 0.03925876865343651,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621\\run_412556b0",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621\\run_412556b0\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621\\run_412556b0\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 168,
          "hidden_dim": 32,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 64,
          "drop_ratio": 0.00027175054024844436,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 4970.7005128836945,
            "tau": 0.4960265215326879,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\east_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "96": {
          "region": "east",
          "horizon": 96,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.05085697114499543,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.05085697114499543,
          "best_val_mape": 0.0492827136993035,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258\\run_fec9fef9",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258\\run_fec9fef9\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258\\run_fec9fef9\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 240,
          "hidden_dim": 64,
          "num_layers": 2,
          "nhead": 4,
          "batch_size": 64,
          "drop_ratio": 0.0002012746272450558,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 986.2698683400453,
            "tau": 0.095128412000397,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\east_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        }
      },
      "south": {
        "48": {
          "region": "south",
          "horizon": 48,
          "method": "VMD",
          "model_type": "LSTM",
          "selection_score": 0.02831280236544703,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.02831280236544703,
          "best_val_mape": 0.02433258968207857,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926\\run_05d38226",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926\\run_05d38226\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926\\run_05d38226\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 128,
          "hidden_dim": 224,
          "num_layers": 2,
          "nhead": 4,
          "batch_size": 16,
          "drop_ratio": 0.0016685175793544004,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 898.3826960132812,
            "tau": 0.23231634274131757,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\south_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "72": {
          "region": "south",
          "horizon": 72,
          "method": "VMD",
          "model_type": "LSTM",
          "selection_score": 0.038381207198606895,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.038381207198606895,
          "best_val_mape": 0.03402088283607312,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612\\run_cd292818",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612\\run_cd292818\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612\\run_cd292818\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 208,
          "hidden_dim": 96,
          "num_layers": 2,
          "nhead": 4,
          "batch_size": 16,
          "drop_ratio": 0.0004271580731392728,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 9,
          "vmd_hparams": {
            "K": 9,
            "alpha": 4428.169003885152,
            "tau": 0.17926939287175325,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\south_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "96": {
          "region": "south",
          "horizon": 96,
          "method": "VMD",
          "model_type": "TRANSFORMER",
          "selection_score": 0.0565508821960269,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.0565508821960269,
          "best_val_mape": 0.05093034879231805,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319\\run_9ea7cec4",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319\\run_9ea7cec4\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319\\run_9ea7cec4\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 264,
          "hidden_dim": 64,
          "num_layers": 2,
          "nhead": 8,
          "batch_size": 64,
          "drop_ratio": 0.024646567927696886,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 9,
          "vmd_hparams": {
            "K": 9,
            "alpha": 4921.822994533805,
            "tau": 0.2103007680756655,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\south_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        }
      }
    }
  },
  "forecasts": {
    "bohai": {
      "48": {
        "region": "bohai",
        "horizon": 48,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "LSTM",
        "window_size": 96,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.05288135978056447,
        "mape_test": 0.05288135978056447,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105\\run_053cc55e",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.3488811254501343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.3545620441436767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.3574188351631164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.3578023314476013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.3561552762985229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.3535585403442383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.3513680100440979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.353849709033966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.3685335516929626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.3986295461654663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4308077096939087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.5023474097251892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.582588255405426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.6432837843894958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.6770527362823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.6941643953323364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.7158381938934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.7616966962814331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.8314130306243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.9066812992095948
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.9847257137298584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 1.0190293788909912
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.9694098830223083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.9206054210662842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.8789162635803223
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.8441458940505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.8157237768173218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.797682523727417
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.7928005456924438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.7897428870201111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.7860234379768372
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.7783726453781128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.7558729648590088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.7430476546287537
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.6823880672454834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.6601616144180298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.7764750123023987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 1.0492916107177734
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 1.100856900215149
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 1.0391137599945068
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.99827778339386
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.9828453660011292
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.9793611168861388
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.9238330125808716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.8627630472183228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.831171989440918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 0.8905114531517029
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 0.9532302021980286
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 0.9547105431556702
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 0.8927688002586365
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 0.8196966052055359
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 0.7616549730300903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 0.7526427507400513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 0.8194642663002014
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 0.9595808386802672
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.1191558837890625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.2553579807281494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.3595151901245115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.3656630516052246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.3901352882385254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.4188885688781738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 1.4608702659606934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 1.4552282094955444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 1.4030673503875732
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 1.339338302612305
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 1.2751495838165283
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 1.2282867431640625
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 1.1645948886871338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 1.0761892795562744
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.9953212141990662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.9298359751701356
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.8952608704566956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.8782989382743835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.8751002550125122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.8897362351417542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.8883943557739258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.8777726292610168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.9089771509170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.9676064252853394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 1.019995093345642
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 1.0524935722351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 1.0779991149902344
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 1.0612235069274902
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 1.0271764993667605
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 1.0071630477905271
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 1.0339298248291016
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 1.094313144683838
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 1.1616384983062744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 1.2234692573547363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 1.2500994205474854
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 1.232184886932373
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 1.1676454544067385
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 1.0776453018188477
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.9846606254577636
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.8946080803871155
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.8191770315170288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.8329087495803833
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.868371844291687
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 0.9603356719017029
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 1.0795546770095825
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 1.1764966249465942
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 1.2191872596740723
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 1.2127137184143066
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 1.1754381656646729
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 1.1267845630645752
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 1.0791865587234497
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 1.041103482246399
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 1.0146749019622803
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 0.9979681968688965
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 0.9929441213607788
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 0.9902570247650146
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 0.9921991229057312
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 0.9847089648246765
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 0.9630971550941467
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.9364337921142578
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.9143930077552795
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.897006630897522
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.8834172487258911
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.8826625943183899
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.8802109360694885
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.8812883496284485
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.9064321517944336
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 0.9532625675201416
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 1.0204036235809326
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 1.1061112880706787
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 1.1964106559753418
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 1.2840131521224976
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 1.3551924228668213
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 1.409550666809082
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 1.4410194158554077
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 1.4396319389343262
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 1.409502387046814
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.3592661619186401
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.2848312854766846
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.202350378036499
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.1270703077316284
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.059370756149292
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 1.0023002624511719
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 0.956046998500824
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 0.9093963503837585
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 0.8625108003616333
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 0.8230820894241333
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 0.7975625395774841
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 0.7838478088378906
          }
        ]
      },
      "72": {
        "region": "bohai",
        "horizon": 72,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 176,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.07726323787683671,
        "mape_test": 0.07726323787683671,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212\\run_b68c39f5",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.3488811254501343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.3545620441436767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.3574188351631164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.3578023314476013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.3561552762985229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.3535585403442383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.3513680100440979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.353849709033966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.3685335516929626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.3986295461654663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4308077096939087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.5023474097251892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.582588255405426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.6432837843894958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.6770527362823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.6941643953323364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.7158381938934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.7616966962814331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.8314130306243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.9066812992095948
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.9847257137298584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 1.0190293788909912
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.9694098830223083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.9206054210662842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.8789162635803223
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.8441458940505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.8157237768173218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.797682523727417
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.7928005456924438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.7897428870201111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.7860234379768372
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.7783726453781128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.7558729648590088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.7430476546287537
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.6823880672454834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.6601616144180298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.7764750123023987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 1.0492916107177734
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 1.100856900215149
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 1.0391137599945068
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.99827778339386
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.9828453660011292
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.9793611168861388
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.9238330125808716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.8627630472183228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.831171989440918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 0.8905114531517029
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 0.9532302021980286
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 0.9547105431556702
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 0.8927688002586365
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 0.8196966052055359
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 0.7616549730300903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 0.7526427507400513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 0.8194642663002014
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 0.9595808386802672
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.1191558837890625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.2553579807281494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.3595151901245115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.3656630516052246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.3901352882385254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.4188885688781738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 1.4608702659606934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 1.4552282094955444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 1.4030673503875732
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 1.339338302612305
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 1.2751495838165283
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 1.2282867431640625
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 1.1645948886871338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 1.0761892795562744
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.9953212141990662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.9298359751701356
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.8952608704566956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.8782989382743835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.8751002550125122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.8897362351417542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.8883943557739258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.8777726292610168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.9089771509170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.9676064252853394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 1.019995093345642
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 1.0524935722351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 1.0779991149902344
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 1.0612235069274902
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 1.0271764993667605
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 1.0071630477905271
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 1.0339298248291016
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 1.094313144683838
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 1.1616384983062744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 1.2234692573547363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 1.2500994205474854
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 1.232184886932373
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 1.1676454544067385
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 1.0776453018188477
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.9846606254577636
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.8946080803871155
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.8191770315170288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.8397677540779114
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.9091765284538269
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 1.0086443424224854
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 1.1099939346313477
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 1.1769413948059082
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 1.2056992053985596
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 1.2016927003860474
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 1.172662377357483
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 1.1459693908691406
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 1.1145106554031372
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 1.0857166051864624
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 1.0661119222640991
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 1.0587300062179565
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 1.061037540435791
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 1.0583736896514893
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 1.0466476678848267
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 1.0206137895584106
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 0.9869575500488281
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.9537679553031921
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.9187990427017212
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.8876660466194153
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.8654822111129761
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.858575165271759
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.8683111667633057
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.8949404954910278
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.9413186311721802
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 1.0034016370773315
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 1.0807702541351318
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 1.1630157232284546
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 1.241341233253479
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 1.3075475692749023
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 1.3731216192245483
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 1.4215635061264038
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 1.4509000778198242
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 1.4614789485931396
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 1.4445240497589111
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.4152213335037231
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.3605437278747559
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.2953591346740723
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.2199136018753052
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.1490172147750854
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 1.0772262811660767
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 1.0104143619537354
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 0.9475809335708618
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 0.8965951800346375
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 0.8619289398193359
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 0.8347733020782471
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 0.813298225402832
          },
          {
            "lead_hour": 49,
            "time": "2026-04-24T00:00:00",
            "swh": 0.7944953441619873
          },
          {
            "lead_hour": 50,
            "time": "2026-04-24T01:00:00",
            "swh": 0.7856048345565796
          },
          {
            "lead_hour": 51,
            "time": "2026-04-24T02:00:00",
            "swh": 0.7871965169906616
          },
          {
            "lead_hour": 52,
            "time": "2026-04-24T03:00:00",
            "swh": 0.8012478351593018
          },
          {
            "lead_hour": 53,
            "time": "2026-04-24T04:00:00",
            "swh": 0.8268248438835144
          },
          {
            "lead_hour": 54,
            "time": "2026-04-24T05:00:00",
            "swh": 0.8491429686546326
          },
          {
            "lead_hour": 55,
            "time": "2026-04-24T06:00:00",
            "swh": 0.8603705167770386
          },
          {
            "lead_hour": 56,
            "time": "2026-04-24T07:00:00",
            "swh": 0.8758274912834167
          },
          {
            "lead_hour": 57,
            "time": "2026-04-24T08:00:00",
            "swh": 0.8895606994628906
          },
          {
            "lead_hour": 58,
            "time": "2026-04-24T09:00:00",
            "swh": 0.9024240374565125
          },
          {
            "lead_hour": 59,
            "time": "2026-04-24T10:00:00",
            "swh": 0.9199805855751038
          },
          {
            "lead_hour": 60,
            "time": "2026-04-24T11:00:00",
            "swh": 0.9346262216567993
          },
          {
            "lead_hour": 61,
            "time": "2026-04-24T12:00:00",
            "swh": 0.9408187866210938
          },
          {
            "lead_hour": 62,
            "time": "2026-04-24T13:00:00",
            "swh": 0.9375714063644409
          },
          {
            "lead_hour": 63,
            "time": "2026-04-24T14:00:00",
            "swh": 0.9203836917877197
          },
          {
            "lead_hour": 64,
            "time": "2026-04-24T15:00:00",
            "swh": 0.8914342522621155
          },
          {
            "lead_hour": 65,
            "time": "2026-04-24T16:00:00",
            "swh": 0.8597006797790527
          },
          {
            "lead_hour": 66,
            "time": "2026-04-24T17:00:00",
            "swh": 0.8208387494087219
          },
          {
            "lead_hour": 67,
            "time": "2026-04-24T18:00:00",
            "swh": 0.7982362508773804
          },
          {
            "lead_hour": 68,
            "time": "2026-04-24T19:00:00",
            "swh": 0.7698521018028259
          },
          {
            "lead_hour": 69,
            "time": "2026-04-24T20:00:00",
            "swh": 0.737796425819397
          },
          {
            "lead_hour": 70,
            "time": "2026-04-24T21:00:00",
            "swh": 0.7135982513427734
          },
          {
            "lead_hour": 71,
            "time": "2026-04-24T22:00:00",
            "swh": 0.7037876844406128
          },
          {
            "lead_hour": 72,
            "time": "2026-04-24T23:00:00",
            "swh": 0.6943137049674988
          }
        ]
      },
      "96": {
        "region": "bohai",
        "horizon": 96,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 248,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.11562269887796735,
        "mape_test": 0.11562269887796735,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622\\run_c266cb2d",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.3488811254501343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.3545620441436767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.3574188351631164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.3578023314476013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.3561552762985229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.3535585403442383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.3513680100440979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.353849709033966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.3685335516929626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.3986295461654663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4308077096939087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.5023474097251892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.582588255405426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.6432837843894958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.6770527362823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.6941643953323364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.7158381938934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.7616966962814331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.8314130306243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.9066812992095948
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.9847257137298584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 1.0190293788909912
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.9694098830223083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.9206054210662842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.8789162635803223
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.8441458940505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.8157237768173218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.797682523727417
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.7928005456924438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.7897428870201111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.7860234379768372
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.7783726453781128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.7558729648590088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.7430476546287537
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.6823880672454834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.6601616144180298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.7764750123023987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 1.0492916107177734
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 1.100856900215149
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 1.0391137599945068
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.99827778339386
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.9828453660011292
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.9793611168861388
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.9238330125808716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.8627630472183228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.831171989440918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 0.8905114531517029
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 0.9532302021980286
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 0.9547105431556702
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 0.8927688002586365
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 0.8196966052055359
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 0.7616549730300903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 0.7526427507400513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 0.8194642663002014
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 0.9595808386802672
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.1191558837890625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.2553579807281494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.3595151901245115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.3656630516052246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.3901352882385254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.4188885688781738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 1.4608702659606934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 1.4552282094955444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 1.4030673503875732
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 1.339338302612305
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 1.2751495838165283
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 1.2282867431640625
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 1.1645948886871338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 1.0761892795562744
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.9953212141990662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.9298359751701356
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.8952608704566956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.8782989382743835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.8751002550125122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.8897362351417542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.8883943557739258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.8777726292610168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.9089771509170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.9676064252853394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 1.019995093345642
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 1.0524935722351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 1.0779991149902344
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 1.0612235069274902
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 1.0271764993667605
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 1.0071630477905271
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 1.0339298248291016
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 1.094313144683838
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 1.1616384983062744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 1.2234692573547363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 1.2500994205474854
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 1.232184886932373
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 1.1676454544067385
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 1.0776453018188477
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.9846606254577636
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.8946080803871155
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.8191770315170288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.8438518643379211
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.9110910892486572
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 0.9924383759498596
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 1.0700823068618774
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 1.123284935951233
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 1.1502293348312378
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 1.1649305820465088
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 1.1707082986831665
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 1.1659575700759888
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 1.147574782371521
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 1.1135817766189575
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 1.0833357572555542
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 1.0629856586456299
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 1.056520700454712
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 1.058732509613037
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 1.057446837425232
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 1.039970874786377
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 1.0095148086547852
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.9715242981910706
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.9269730448722839
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.8804128766059875
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.8369572758674622
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.8011782765388489
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.7857610583305359
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.8003371953964233
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.8359402418136597
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 0.9017729759216309
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 1.0022790431976318
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 1.1132252216339111
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 1.2146180868148804
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 1.3044211864471436
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 1.3763442039489746
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 1.4249709844589233
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 1.4392327070236206
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 1.4205907583236694
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 1.3864092826843262
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.345019817352295
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.296486496925354
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.229754090309143
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.1521598100662231
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.0676875114440918
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 0.9913277626037598
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 0.9342001676559448
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 0.8904434442520142
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 0.8662383556365967
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 0.8609254956245422
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 0.8629593253135681
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 0.8752435445785522
          },
          {
            "lead_hour": 49,
            "time": "2026-04-24T00:00:00",
            "swh": 0.897301435470581
          },
          {
            "lead_hour": 50,
            "time": "2026-04-24T01:00:00",
            "swh": 0.9236596822738647
          },
          {
            "lead_hour": 51,
            "time": "2026-04-24T02:00:00",
            "swh": 0.9438257813453674
          },
          {
            "lead_hour": 52,
            "time": "2026-04-24T03:00:00",
            "swh": 0.9551413655281067
          },
          {
            "lead_hour": 53,
            "time": "2026-04-24T04:00:00",
            "swh": 0.9512284994125366
          },
          {
            "lead_hour": 54,
            "time": "2026-04-24T05:00:00",
            "swh": 0.9425362944602966
          },
          {
            "lead_hour": 55,
            "time": "2026-04-24T06:00:00",
            "swh": 0.9334918260574341
          },
          {
            "lead_hour": 56,
            "time": "2026-04-24T07:00:00",
            "swh": 0.9255223870277405
          },
          {
            "lead_hour": 57,
            "time": "2026-04-24T08:00:00",
            "swh": 0.9145925641059875
          },
          {
            "lead_hour": 58,
            "time": "2026-04-24T09:00:00",
            "swh": 0.9050061106681824
          },
          {
            "lead_hour": 59,
            "time": "2026-04-24T10:00:00",
            "swh": 0.8973348736763
          },
          {
            "lead_hour": 60,
            "time": "2026-04-24T11:00:00",
            "swh": 0.8986090421676636
          },
          {
            "lead_hour": 61,
            "time": "2026-04-24T12:00:00",
            "swh": 0.9030600786209106
          },
          {
            "lead_hour": 62,
            "time": "2026-04-24T13:00:00",
            "swh": 0.9084603786468506
          },
          {
            "lead_hour": 63,
            "time": "2026-04-24T14:00:00",
            "swh": 0.9051676392555237
          },
          {
            "lead_hour": 64,
            "time": "2026-04-24T15:00:00",
            "swh": 0.895625650882721
          },
          {
            "lead_hour": 65,
            "time": "2026-04-24T16:00:00",
            "swh": 0.8724386096000671
          },
          {
            "lead_hour": 66,
            "time": "2026-04-24T17:00:00",
            "swh": 0.8542883396148682
          },
          {
            "lead_hour": 67,
            "time": "2026-04-24T18:00:00",
            "swh": 0.8439239859580994
          },
          {
            "lead_hour": 68,
            "time": "2026-04-24T19:00:00",
            "swh": 0.8453768491744995
          },
          {
            "lead_hour": 69,
            "time": "2026-04-24T20:00:00",
            "swh": 0.8465491533279419
          },
          {
            "lead_hour": 70,
            "time": "2026-04-24T21:00:00",
            "swh": 0.8335868716239929
          },
          {
            "lead_hour": 71,
            "time": "2026-04-24T22:00:00",
            "swh": 0.810141921043396
          },
          {
            "lead_hour": 72,
            "time": "2026-04-24T23:00:00",
            "swh": 0.7895838022232056
          },
          {
            "lead_hour": 73,
            "time": "2026-04-25T00:00:00",
            "swh": 0.7713701725006104
          },
          {
            "lead_hour": 74,
            "time": "2026-04-25T01:00:00",
            "swh": 0.7575812339782715
          },
          {
            "lead_hour": 75,
            "time": "2026-04-25T02:00:00",
            "swh": 0.7445805668830872
          },
          {
            "lead_hour": 76,
            "time": "2026-04-25T03:00:00",
            "swh": 0.7366827726364136
          },
          {
            "lead_hour": 77,
            "time": "2026-04-25T04:00:00",
            "swh": 0.7329943180084229
          },
          {
            "lead_hour": 78,
            "time": "2026-04-25T05:00:00",
            "swh": 0.7314172387123108
          },
          {
            "lead_hour": 79,
            "time": "2026-04-25T06:00:00",
            "swh": 0.7263778448104858
          },
          {
            "lead_hour": 80,
            "time": "2026-04-25T07:00:00",
            "swh": 0.7107537984848022
          },
          {
            "lead_hour": 81,
            "time": "2026-04-25T08:00:00",
            "swh": 0.6957449913024902
          },
          {
            "lead_hour": 82,
            "time": "2026-04-25T09:00:00",
            "swh": 0.6851537227630615
          },
          {
            "lead_hour": 83,
            "time": "2026-04-25T10:00:00",
            "swh": 0.6616505980491638
          },
          {
            "lead_hour": 84,
            "time": "2026-04-25T11:00:00",
            "swh": 0.6330126523971558
          },
          {
            "lead_hour": 85,
            "time": "2026-04-25T12:00:00",
            "swh": 0.6050998568534851
          },
          {
            "lead_hour": 86,
            "time": "2026-04-25T13:00:00",
            "swh": 0.5756487846374512
          },
          {
            "lead_hour": 87,
            "time": "2026-04-25T14:00:00",
            "swh": 0.5432150959968567
          },
          {
            "lead_hour": 88,
            "time": "2026-04-25T15:00:00",
            "swh": 0.5052738189697266
          },
          {
            "lead_hour": 89,
            "time": "2026-04-25T16:00:00",
            "swh": 0.4670807123184204
          },
          {
            "lead_hour": 90,
            "time": "2026-04-25T17:00:00",
            "swh": 0.43118607997894287
          },
          {
            "lead_hour": 91,
            "time": "2026-04-25T18:00:00",
            "swh": 0.3876301348209381
          },
          {
            "lead_hour": 92,
            "time": "2026-04-25T19:00:00",
            "swh": 0.35249704122543335
          },
          {
            "lead_hour": 93,
            "time": "2026-04-25T20:00:00",
            "swh": 0.32013094425201416
          },
          {
            "lead_hour": 94,
            "time": "2026-04-25T21:00:00",
            "swh": 0.28170332312583923
          },
          {
            "lead_hour": 95,
            "time": "2026-04-25T22:00:00",
            "swh": 0.2431466430425644
          },
          {
            "lead_hour": 96,
            "time": "2026-04-25T23:00:00",
            "swh": 0.20523086190223694
          }
        ]
      }
    },
    "east": {
      "48": {
        "region": "east",
        "horizon": 48,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "TRANSFORMER",
        "window_size": 128,
        "mode_count": 9,
        "mode_scaling": "none",
        "selection_score": 0.039814403260396855,
        "mape_test": 0.039814403260396855,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455\\run_d9baa362",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 1.5717815160751345
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 1.5740444660186768
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 1.5776336193084717
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 1.580214500427246
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 1.579055666923523
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 1.5793886184692385
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 1.5793952941894531
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 1.5689375400543213
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 1.5528597831726074
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 1.5365689992904663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 1.5394502878189087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 1.537503719329834
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 1.5108108520507812
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 1.4731178283691406
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 1.4358417987823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 1.4011956453323364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 1.3701350688934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 1.344948649406433
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 1.3233563899993896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 1.3043863773345947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 1.2884366512298584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 1.2768418788909912
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 1.2640875577926636
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 1.2523925304412842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 1.2470803260803225
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 1.249175190925598
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 1.2527354955673218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 1.259596586227417
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 1.2720485925674438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 1.281686305999756
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 1.2835819721221924
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 1.2810581922531128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 1.2839491367340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 1.2806453704833984
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 1.2798001766204834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 1.2780815362930298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 1.274277687072754
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 1.2721920013427734
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 1.266628384590149
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 1.2615258693695068
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 1.26121723651886
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 1.2592124938964844
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 1.250113010406494
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 1.2329150438308716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 1.2255560159683228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 1.229853630065918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 1.2266931533813477
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 1.2181227207183838
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 1.2073960304260254
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 1.1923294067382812
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 1.1785833835601809
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 1.1720553636550903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 1.1696349382400513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 1.1639466285705566
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 1.156358242034912
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.1428375244140625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.1376821994781494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.1300230026245115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.1376357078552246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.1821274757385254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.2609295845031738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 1.3307433128356934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 1.3475621938705444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 1.3244540691375732
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 1.295637130737305
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 1.2922394275665283
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 1.3193511962890625
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 1.3423292636871338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 1.3493826389312744
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 1.359823226928711
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 1.3724629878997805
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 1.3908662796020508
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 1.4083282947540283
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 1.4163600206375122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 1.4143943786621094
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 1.4059724807739258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 1.393641710281372
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 1.3806568384170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 1.3687294721603394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 1.356420874595642
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 1.3415560722351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 1.3267784118652344
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 1.3092703819274902
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 1.2932897806167605
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 1.2742528915405271
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 1.2558536529541016
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 1.237623691558838
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 1.2202322483062744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 1.2022290229797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 1.1832048892974854
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 1.163337230682373
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 1.1544618606567385
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 1.1379480361938477
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 1.1226000785827637
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 1.0996861457824707
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 1.0735715627670288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 1.0962642431259155
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 1.1021329164505005
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 1.113099455833435
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 1.122808575630188
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 1.1385600566864014
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 1.1593834161758423
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 1.18284010887146
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 1.2011158466339111
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 1.2211437225341797
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 1.2451318502426147
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 1.2660362720489502
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 1.282380223274231
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 1.299397587776184
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 1.3142539262771606
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 1.320622205734253
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 1.3358097076416016
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 1.3488248586654663
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 1.3609248399734497
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 1.3684252500534058
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 1.3730275630950928
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 1.3789476156234741
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 1.3860400915145874
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 1.381990671157837
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 1.3868677616119385
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 1.3864266872406006
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 1.3740427494049072
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 1.3741337060928345
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 1.3627829551696777
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 1.3573462963104248
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 1.350477695465088
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 1.334454894065857
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 1.3153105974197388
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 1.3020503520965576
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 1.2848104238510132
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 1.2725542783737183
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 1.2525708675384521
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.2439367771148682
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.2315428256988525
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.216633915901184
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.2147815227508545
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.2042174339294434
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 1.1922376155853271
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 1.1933608055114746
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 1.1974961757659912
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 1.1967333555221558
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 1.2029595375061035
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 1.204075813293457
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 1.2121140956878662
          }
        ]
      },
      "72": {
        "region": "east",
        "horizon": 72,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "LSTM",
        "window_size": 168,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.03877862334377191,
        "mape_test": 0.03877862334377191,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621\\run_412556b0",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 1.5717815160751345
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 1.5740444660186768
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 1.5776336193084717
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 1.580214500427246
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 1.579055666923523
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 1.5793886184692385
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 1.5793952941894531
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 1.5689375400543213
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 1.5528597831726074
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 1.5365689992904663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 1.5394502878189087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 1.537503719329834
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 1.5108108520507812
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 1.4731178283691406
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 1.4358417987823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 1.4011956453323364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 1.3701350688934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 1.344948649406433
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 1.3233563899993896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 1.3043863773345947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 1.2884366512298584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 1.2768418788909912
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 1.2640875577926636
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 1.2523925304412842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 1.2470803260803225
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 1.249175190925598
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 1.2527354955673218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 1.259596586227417
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 1.2720485925674438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 1.281686305999756
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 1.2835819721221924
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 1.2810581922531128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 1.2839491367340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 1.2806453704833984
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 1.2798001766204834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 1.2780815362930298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 1.274277687072754
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 1.2721920013427734
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 1.266628384590149
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 1.2615258693695068
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 1.26121723651886
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 1.2592124938964844
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 1.250113010406494
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 1.2329150438308716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 1.2255560159683228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 1.229853630065918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 1.2266931533813477
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 1.2181227207183838
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 1.2073960304260254
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 1.1923294067382812
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 1.1785833835601809
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 1.1720553636550903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 1.1696349382400513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 1.1639466285705566
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 1.156358242034912
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.1428375244140625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.1376821994781494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.1300230026245115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.1376357078552246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.1821274757385254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.2609295845031738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 1.3307433128356934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 1.3475621938705444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 1.3244540691375732
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 1.295637130737305
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 1.2922394275665283
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 1.3193511962890625
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 1.3423292636871338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 1.3493826389312744
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 1.359823226928711
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 1.3724629878997805
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 1.3908662796020508
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 1.4083282947540283
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 1.4163600206375122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 1.4143943786621094
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 1.4059724807739258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 1.393641710281372
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 1.3806568384170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 1.3687294721603394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 1.356420874595642
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 1.3415560722351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 1.3267784118652344
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 1.3092703819274902
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 1.2932897806167605
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 1.2742528915405271
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 1.2558536529541016
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 1.237623691558838
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 1.2202322483062744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 1.2022290229797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 1.1832048892974854
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 1.163337230682373
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 1.1544618606567385
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 1.1379480361938477
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 1.1226000785827637
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 1.0996861457824707
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 1.0735715627670288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 1.109412431716919
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 1.112091302871704
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 1.1238559484481812
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 1.1363884210586548
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 1.150272250175476
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 1.1652894020080566
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 1.1802634000778198
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 1.1972627639770508
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 1.214257001876831
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 1.2337307929992676
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 1.2530986070632935
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 1.2694892883300781
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 1.2863242626190186
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 1.302329421043396
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 1.319772481918335
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 1.3369591236114502
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 1.3485219478607178
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 1.3604007959365845
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 1.3699429035186768
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 1.3780930042266846
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 1.3778859376907349
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 1.3788920640945435
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 1.375084400177002
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 1.3723914623260498
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 1.3680181503295898
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 1.3629701137542725
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 1.351473331451416
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 1.337853193283081
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 1.3171710968017578
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 1.302764892578125
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 1.2857686281204224
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 1.2663460969924927
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 1.24794340133667
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 1.2321414947509766
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 1.2151823043823242
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 1.1935718059539795
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.1778109073638916
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.1664355993270874
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.1553841829299927
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.1477763652801514
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.1449458599090576
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 1.1407301425933838
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 1.137932300567627
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 1.1365571022033691
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 1.1349512338638306
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 1.1419532299041748
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 1.1516715288162231
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 1.1668522357940674
          },
          {
            "lead_hour": 49,
            "time": "2026-04-24T00:00:00",
            "swh": 1.1875196695327759
          },
          {
            "lead_hour": 50,
            "time": "2026-04-24T01:00:00",
            "swh": 1.2052276134490967
          },
          {
            "lead_hour": 51,
            "time": "2026-04-24T02:00:00",
            "swh": 1.2227089405059814
          },
          {
            "lead_hour": 52,
            "time": "2026-04-24T03:00:00",
            "swh": 1.236364722251892
          },
          {
            "lead_hour": 53,
            "time": "2026-04-24T04:00:00",
            "swh": 1.2474255561828613
          },
          {
            "lead_hour": 54,
            "time": "2026-04-24T05:00:00",
            "swh": 1.2572404146194458
          },
          {
            "lead_hour": 55,
            "time": "2026-04-24T06:00:00",
            "swh": 1.2646006345748901
          },
          {
            "lead_hour": 56,
            "time": "2026-04-24T07:00:00",
            "swh": 1.2688491344451904
          },
          {
            "lead_hour": 57,
            "time": "2026-04-24T08:00:00",
            "swh": 1.2748267650604248
          },
          {
            "lead_hour": 58,
            "time": "2026-04-24T09:00:00",
            "swh": 1.277848243713379
          },
          {
            "lead_hour": 59,
            "time": "2026-04-24T10:00:00",
            "swh": 1.2782117128372192
          },
          {
            "lead_hour": 60,
            "time": "2026-04-24T11:00:00",
            "swh": 1.2751617431640625
          },
          {
            "lead_hour": 61,
            "time": "2026-04-24T12:00:00",
            "swh": 1.2706505060195923
          },
          {
            "lead_hour": 62,
            "time": "2026-04-24T13:00:00",
            "swh": 1.2666040658950806
          },
          {
            "lead_hour": 63,
            "time": "2026-04-24T14:00:00",
            "swh": 1.2605003118515015
          },
          {
            "lead_hour": 64,
            "time": "2026-04-24T15:00:00",
            "swh": 1.2529197931289673
          },
          {
            "lead_hour": 65,
            "time": "2026-04-24T16:00:00",
            "swh": 1.245164394378662
          },
          {
            "lead_hour": 66,
            "time": "2026-04-24T17:00:00",
            "swh": 1.241478443145752
          },
          {
            "lead_hour": 67,
            "time": "2026-04-24T18:00:00",
            "swh": 1.234359860420227
          },
          {
            "lead_hour": 68,
            "time": "2026-04-24T19:00:00",
            "swh": 1.227084755897522
          },
          {
            "lead_hour": 69,
            "time": "2026-04-24T20:00:00",
            "swh": 1.2238893508911133
          },
          {
            "lead_hour": 70,
            "time": "2026-04-24T21:00:00",
            "swh": 1.2200607061386108
          },
          {
            "lead_hour": 71,
            "time": "2026-04-24T22:00:00",
            "swh": 1.2193520069122314
          },
          {
            "lead_hour": 72,
            "time": "2026-04-24T23:00:00",
            "swh": 1.2196826934814453
          }
        ]
      },
      "96": {
        "region": "east",
        "horizon": 96,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 240,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.05085697114499543,
        "mape_test": 0.05085697114499543,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258\\run_fec9fef9",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 1.5717815160751345
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 1.5740444660186768
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 1.5776336193084717
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 1.580214500427246
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 1.579055666923523
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 1.5793886184692385
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 1.5793952941894531
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 1.5689375400543213
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 1.5528597831726074
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 1.5365689992904663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 1.5394502878189087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 1.537503719329834
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 1.5108108520507812
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 1.4731178283691406
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 1.4358417987823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 1.4011956453323364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 1.3701350688934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 1.344948649406433
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 1.3233563899993896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 1.3043863773345947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 1.2884366512298584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 1.2768418788909912
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 1.2640875577926636
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 1.2523925304412842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 1.2470803260803225
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 1.249175190925598
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 1.2527354955673218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 1.259596586227417
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 1.2720485925674438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 1.281686305999756
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 1.2835819721221924
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 1.2810581922531128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 1.2839491367340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 1.2806453704833984
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 1.2798001766204834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 1.2780815362930298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 1.274277687072754
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 1.2721920013427734
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 1.266628384590149
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 1.2615258693695068
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 1.26121723651886
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 1.2592124938964844
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 1.250113010406494
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 1.2329150438308716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 1.2255560159683228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 1.229853630065918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 1.2266931533813477
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 1.2181227207183838
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 1.2073960304260254
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 1.1923294067382812
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 1.1785833835601809
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 1.1720553636550903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 1.1696349382400513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 1.1639466285705566
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 1.156358242034912
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.1428375244140625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.1376821994781494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.1300230026245115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.1376357078552246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.1821274757385254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.2609295845031738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 1.3307433128356934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 1.3475621938705444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 1.3244540691375732
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 1.295637130737305
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 1.2922394275665283
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 1.3193511962890625
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 1.3423292636871338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 1.3493826389312744
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 1.359823226928711
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 1.3724629878997805
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 1.3908662796020508
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 1.4083282947540283
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 1.4163600206375122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 1.4143943786621094
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 1.4059724807739258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 1.393641710281372
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 1.3806568384170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 1.3687294721603394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 1.356420874595642
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 1.3415560722351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 1.3267784118652344
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 1.3092703819274902
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 1.2932897806167605
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 1.2742528915405271
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 1.2558536529541016
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 1.237623691558838
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 1.2202322483062744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 1.2022290229797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 1.1832048892974854
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 1.163337230682373
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 1.1544618606567385
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 1.1379480361938477
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 1.1226000785827637
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 1.0996861457824707
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 1.0735715627670288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 1.0791126489639282
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 1.0900858640670776
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 1.1033928394317627
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 1.122958779335022
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 1.1420764923095703
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 1.1662166118621826
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 1.1890640258789062
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 1.2157046794891357
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 1.2337521314620972
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 1.2563245296478271
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 1.2788615226745605
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 1.2907636165618896
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 1.3047754764556885
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 1.313536286354065
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 1.3239190578460693
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 1.336320161819458
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 1.3468451499938965
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 1.3601185083389282
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 1.3734197616577148
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 1.3819128274917603
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 1.3888146877288818
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 1.3905847072601318
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 1.3908348083496094
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 1.390960693359375
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 1.3885332345962524
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 1.3866928815841675
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 1.3856679201126099
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 1.375731110572815
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 1.3600984811782837
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 1.3450883626937866
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 1.3273136615753174
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 1.311318039894104
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 1.295499324798584
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 1.2770118713378906
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 1.2557703256607056
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 1.2337541580200195
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.2159181833267212
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.2067993879318237
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.198534369468689
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.187543272972107
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.1784884929656982
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 1.1745190620422363
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 1.173442006111145
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 1.1781604290008545
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 1.1805683374404907
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 1.182505488395691
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 1.1882672309875488
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 1.1960369348526
          },
          {
            "lead_hour": 49,
            "time": "2026-04-24T00:00:00",
            "swh": 1.199049711227417
          },
          {
            "lead_hour": 50,
            "time": "2026-04-24T01:00:00",
            "swh": 1.2051942348480225
          },
          {
            "lead_hour": 51,
            "time": "2026-04-24T02:00:00",
            "swh": 1.2144044637680054
          },
          {
            "lead_hour": 52,
            "time": "2026-04-24T03:00:00",
            "swh": 1.2273482084274292
          },
          {
            "lead_hour": 53,
            "time": "2026-04-24T04:00:00",
            "swh": 1.2358174324035645
          },
          {
            "lead_hour": 54,
            "time": "2026-04-24T05:00:00",
            "swh": 1.2471778392791748
          },
          {
            "lead_hour": 55,
            "time": "2026-04-24T06:00:00",
            "swh": 1.256703495979309
          },
          {
            "lead_hour": 56,
            "time": "2026-04-24T07:00:00",
            "swh": 1.2686071395874023
          },
          {
            "lead_hour": 57,
            "time": "2026-04-24T08:00:00",
            "swh": 1.2749172449111938
          },
          {
            "lead_hour": 58,
            "time": "2026-04-24T09:00:00",
            "swh": 1.2824857234954834
          },
          {
            "lead_hour": 59,
            "time": "2026-04-24T10:00:00",
            "swh": 1.2831586599349976
          },
          {
            "lead_hour": 60,
            "time": "2026-04-24T11:00:00",
            "swh": 1.276913046836853
          },
          {
            "lead_hour": 61,
            "time": "2026-04-24T12:00:00",
            "swh": 1.2710285186767578
          },
          {
            "lead_hour": 62,
            "time": "2026-04-24T13:00:00",
            "swh": 1.2634068727493286
          },
          {
            "lead_hour": 63,
            "time": "2026-04-24T14:00:00",
            "swh": 1.2575302124023438
          },
          {
            "lead_hour": 64,
            "time": "2026-04-24T15:00:00",
            "swh": 1.2538543939590454
          },
          {
            "lead_hour": 65,
            "time": "2026-04-24T16:00:00",
            "swh": 1.248164176940918
          },
          {
            "lead_hour": 66,
            "time": "2026-04-24T17:00:00",
            "swh": 1.24849534034729
          },
          {
            "lead_hour": 67,
            "time": "2026-04-24T18:00:00",
            "swh": 1.2482340335845947
          },
          {
            "lead_hour": 68,
            "time": "2026-04-24T19:00:00",
            "swh": 1.2506918907165527
          },
          {
            "lead_hour": 69,
            "time": "2026-04-24T20:00:00",
            "swh": 1.256608247756958
          },
          {
            "lead_hour": 70,
            "time": "2026-04-24T21:00:00",
            "swh": 1.260274887084961
          },
          {
            "lead_hour": 71,
            "time": "2026-04-24T22:00:00",
            "swh": 1.2646400928497314
          },
          {
            "lead_hour": 72,
            "time": "2026-04-24T23:00:00",
            "swh": 1.2711328268051147
          },
          {
            "lead_hour": 73,
            "time": "2026-04-25T00:00:00",
            "swh": 1.2759429216384888
          },
          {
            "lead_hour": 74,
            "time": "2026-04-25T01:00:00",
            "swh": 1.2833112478256226
          },
          {
            "lead_hour": 75,
            "time": "2026-04-25T02:00:00",
            "swh": 1.296074628829956
          },
          {
            "lead_hour": 76,
            "time": "2026-04-25T03:00:00",
            "swh": 1.3104058504104614
          },
          {
            "lead_hour": 77,
            "time": "2026-04-25T04:00:00",
            "swh": 1.3213294744491577
          },
          {
            "lead_hour": 78,
            "time": "2026-04-25T05:00:00",
            "swh": 1.3310292959213257
          },
          {
            "lead_hour": 79,
            "time": "2026-04-25T06:00:00",
            "swh": 1.3418740034103394
          },
          {
            "lead_hour": 80,
            "time": "2026-04-25T07:00:00",
            "swh": 1.3582432270050049
          },
          {
            "lead_hour": 81,
            "time": "2026-04-25T08:00:00",
            "swh": 1.377617359161377
          },
          {
            "lead_hour": 82,
            "time": "2026-04-25T09:00:00",
            "swh": 1.4000812768936157
          },
          {
            "lead_hour": 83,
            "time": "2026-04-25T10:00:00",
            "swh": 1.4203376770019531
          },
          {
            "lead_hour": 84,
            "time": "2026-04-25T11:00:00",
            "swh": 1.4436755180358887
          },
          {
            "lead_hour": 85,
            "time": "2026-04-25T12:00:00",
            "swh": 1.4663341045379639
          },
          {
            "lead_hour": 86,
            "time": "2026-04-25T13:00:00",
            "swh": 1.4827818870544434
          },
          {
            "lead_hour": 87,
            "time": "2026-04-25T14:00:00",
            "swh": 1.4999737739562988
          },
          {
            "lead_hour": 88,
            "time": "2026-04-25T15:00:00",
            "swh": 1.5211093425750732
          },
          {
            "lead_hour": 89,
            "time": "2026-04-25T16:00:00",
            "swh": 1.5385774374008179
          },
          {
            "lead_hour": 90,
            "time": "2026-04-25T17:00:00",
            "swh": 1.550480842590332
          },
          {
            "lead_hour": 91,
            "time": "2026-04-25T18:00:00",
            "swh": 1.5614255666732788
          },
          {
            "lead_hour": 92,
            "time": "2026-04-25T19:00:00",
            "swh": 1.5697989463806152
          },
          {
            "lead_hour": 93,
            "time": "2026-04-25T20:00:00",
            "swh": 1.572831392288208
          },
          {
            "lead_hour": 94,
            "time": "2026-04-25T21:00:00",
            "swh": 1.5790592432022095
          },
          {
            "lead_hour": 95,
            "time": "2026-04-25T22:00:00",
            "swh": 1.5887131690979004
          },
          {
            "lead_hour": 96,
            "time": "2026-04-25T23:00:00",
            "swh": 1.5942919254302979
          }
        ]
      }
    },
    "south": {
      "48": {
        "region": "south",
        "horizon": 48,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "LSTM",
        "window_size": 128,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.02831280236544703,
        "mape_test": 0.02831280236544703,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926\\run_05d38226",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.4716838598251343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.4705288410186767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.4692352414131164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.4681538939476013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.4662626981735229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.4646425247192383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.4631844162940979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.461027443408966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.4588655829429626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.4572232961654663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4530245065689087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.4547399878501892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.457588255405426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.4611548781394958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.4631855487823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.4649163484573364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.4638850688934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.4621361494064331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.4612958431243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.4642984867095947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.4664151668548584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 0.467759907245636
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.4611091017723083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.4606444835662842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.4597267806529999
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.4603568315505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.4597667455673218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.4593036472797394
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.4568630456924438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.4547819495201111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.4525273442268371
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.4504917860031128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.4480116367340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.4456843733787536
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.4382474422454834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.4377495050430298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.4380961060523987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 0.4399165511131286
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 0.4409447908401489
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 0.4409692883491516
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.4404164552688598
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.4401207566261291
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.4412751793861389
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.4431201219558716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.4452825784683227
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.4476270675659179
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 0.4483727812767029
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 0.4544509053230285
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 0.4620347619056701
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 0.4721145033836365
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 0.4837591052055359
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 0.4955416917800903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 0.5092345476150513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 0.5267396569252014
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 0.5430769324302673
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 0.5542144775390625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 0.5612662434577942
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 0.5677672028541565
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 0.5697646141052246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 0.5781236290931702
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 0.586613118648529
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 0.5951476097106934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 0.6048864126205444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 0.6152254939079285
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 0.6240063309669495
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 0.6320831179618835
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 0.6416168808937073
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 0.6523878574371338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 0.6613942980766296
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.6693934798240662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.6732441782951355
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.6840792298316956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.6976348757743835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.7115260362625122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.7232323288917542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.7316560745239258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.7373917698860168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.7410084009170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.7422646284103394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 0.7416747808456421
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 0.7622103691101074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 0.7640342116355896
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 0.7619070410728455
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 0.7622839212417603
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 0.7625340819358826
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 0.7619571089744568
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 0.7617935538291931
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 0.7617361545562744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 0.7608227729797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 0.7586444020271301
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 0.7558664679527283
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 0.7530946731567383
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 0.7497645020484924
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.7473559379577637
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.7393346428871155
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.7376340627670288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.7606065273284912
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.7513755559921265
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 0.7520891427993774
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 0.7510952353477478
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 0.7465481758117676
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 0.747763991355896
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 0.7508724927902222
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 0.7571420669555664
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 0.7593609094619751
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 0.7589287757873535
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 0.7564992904663086
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 0.7582895159721375
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 0.7554605007171631
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 0.7520880103111267
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 0.7515007853507996
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 0.7510484457015991
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 0.751121461391449
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 0.7515547275543213
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.7484384775161743
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.7444007396697998
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.7389771342277527
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.7286416292190552
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.7164868116378784
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.705440878868103
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.6884967684745789
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.6723510026931763
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 0.6584846377372742
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 0.645430862903595
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 0.6344295144081116
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 0.6273778676986694
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 0.6186962127685547
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 0.6105165481567383
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 0.6025887727737427
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 0.597129225730896
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 0.590174674987793
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 0.5838411450386047
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 0.5766295194625854
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 0.5647716522216797
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 0.5584398508071899
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 0.5539875030517578
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 0.5464692115783691
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 0.538162350654602
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 0.5273072123527527
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 0.5124272108078003
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 0.4972708821296692
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 0.4840511679649353
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 0.4709925055503845
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 0.45617765188217163
          }
        ]
      },
      "72": {
        "region": "south",
        "horizon": 72,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "LSTM",
        "window_size": 208,
        "mode_count": 9,
        "mode_scaling": "none",
        "selection_score": 0.038381207198606895,
        "mape_test": 0.038381207198606895,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612\\run_cd292818",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.4716838598251343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.4705288410186767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.4692352414131164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.4681538939476013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.4662626981735229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.4646425247192383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.4631844162940979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.461027443408966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.4588655829429626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.4572232961654663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4530245065689087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.4547399878501892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.457588255405426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.4611548781394958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.4631855487823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.4649163484573364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.4638850688934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.4621361494064331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.4612958431243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.4642984867095947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.4664151668548584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 0.467759907245636
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.4611091017723083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.4606444835662842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.4597267806529999
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.4603568315505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.4597667455673218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.4593036472797394
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.4568630456924438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.4547819495201111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.4525273442268371
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.4504917860031128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.4480116367340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.4456843733787536
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.4382474422454834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.4377495050430298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.4380961060523987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 0.4399165511131286
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 0.4409447908401489
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 0.4409692883491516
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.4404164552688598
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.4401207566261291
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.4412751793861389
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.4431201219558716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.4452825784683227
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.4476270675659179
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 0.4483727812767029
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 0.4544509053230285
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 0.4620347619056701
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 0.4721145033836365
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 0.4837591052055359
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 0.4955416917800903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 0.5092345476150513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 0.5267396569252014
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 0.5430769324302673
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 0.5542144775390625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 0.5612662434577942
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 0.5677672028541565
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 0.5697646141052246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 0.5781236290931702
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 0.586613118648529
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 0.5951476097106934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 0.6048864126205444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 0.6152254939079285
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 0.6240063309669495
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 0.6320831179618835
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 0.6416168808937073
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 0.6523878574371338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 0.6613942980766296
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.6693934798240662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.6732441782951355
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.6840792298316956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.6976348757743835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.7115260362625122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.7232323288917542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.7316560745239258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.7373917698860168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.7410084009170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.7422646284103394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 0.7416747808456421
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 0.7622103691101074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 0.7640342116355896
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 0.7619070410728455
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 0.7622839212417603
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 0.7625340819358826
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 0.7619571089744568
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 0.7617935538291931
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 0.7617361545562744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 0.7608227729797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 0.7586444020271301
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 0.7558664679527283
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 0.7530946731567383
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 0.7497645020484924
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.7473559379577637
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.7393346428871155
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.7376340627670288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.7305589914321899
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.7329351902008057
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 0.7336032390594482
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 0.7338992357254028
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 0.7323747277259827
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 0.7337470650672913
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 0.7354002594947815
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 0.7370809316635132
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 0.7440440654754639
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 0.7502114772796631
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 0.7572207450866699
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 0.7632206678390503
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 0.7687438130378723
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 0.7716960906982422
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 0.7711717486381531
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 0.7660108804702759
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 0.7529438734054565
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 0.7445926666259766
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.7395249009132385
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.7307060956954956
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.7228052616119385
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.7134795784950256
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.7037443518638611
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.6928732991218567
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.6827178597450256
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.668535053730011
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 0.6606844663619995
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 0.6498723030090332
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 0.6359912157058716
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 0.6256615519523621
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 0.6151636242866516
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 0.6092264652252197
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 0.6030701994895935
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 0.593879222869873
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 0.5838782787322998
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 0.5744242668151855
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 0.5655350685119629
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 0.5609041452407837
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 0.5535378456115723
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 0.5481467247009277
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 0.5369684100151062
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 0.5249021053314209
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 0.5134360790252686
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 0.5068734884262085
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 0.4964357912540436
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 0.49036431312561035
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 0.48254871368408203
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 0.4743034839630127
          },
          {
            "lead_hour": 49,
            "time": "2026-04-24T00:00:00",
            "swh": 0.4653453230857849
          },
          {
            "lead_hour": 50,
            "time": "2026-04-24T01:00:00",
            "swh": 0.455255389213562
          },
          {
            "lead_hour": 51,
            "time": "2026-04-24T02:00:00",
            "swh": 0.4488987922668457
          },
          {
            "lead_hour": 52,
            "time": "2026-04-24T03:00:00",
            "swh": 0.44259050488471985
          },
          {
            "lead_hour": 53,
            "time": "2026-04-24T04:00:00",
            "swh": 0.43621373176574707
          },
          {
            "lead_hour": 54,
            "time": "2026-04-24T05:00:00",
            "swh": 0.43031787872314453
          },
          {
            "lead_hour": 55,
            "time": "2026-04-24T06:00:00",
            "swh": 0.42309409379959106
          },
          {
            "lead_hour": 56,
            "time": "2026-04-24T07:00:00",
            "swh": 0.42101290822029114
          },
          {
            "lead_hour": 57,
            "time": "2026-04-24T08:00:00",
            "swh": 0.41802406311035156
          },
          {
            "lead_hour": 58,
            "time": "2026-04-24T09:00:00",
            "swh": 0.4174349308013916
          },
          {
            "lead_hour": 59,
            "time": "2026-04-24T10:00:00",
            "swh": 0.4182719588279724
          },
          {
            "lead_hour": 60,
            "time": "2026-04-24T11:00:00",
            "swh": 0.42376500368118286
          },
          {
            "lead_hour": 61,
            "time": "2026-04-24T12:00:00",
            "swh": 0.42497920989990234
          },
          {
            "lead_hour": 62,
            "time": "2026-04-24T13:00:00",
            "swh": 0.42501676082611084
          },
          {
            "lead_hour": 63,
            "time": "2026-04-24T14:00:00",
            "swh": 0.42716217041015625
          },
          {
            "lead_hour": 64,
            "time": "2026-04-24T15:00:00",
            "swh": 0.42880675196647644
          },
          {
            "lead_hour": 65,
            "time": "2026-04-24T16:00:00",
            "swh": 0.42908936738967896
          },
          {
            "lead_hour": 66,
            "time": "2026-04-24T17:00:00",
            "swh": 0.42888325452804565
          },
          {
            "lead_hour": 67,
            "time": "2026-04-24T18:00:00",
            "swh": 0.4257095456123352
          },
          {
            "lead_hour": 68,
            "time": "2026-04-24T19:00:00",
            "swh": 0.4217183291912079
          },
          {
            "lead_hour": 69,
            "time": "2026-04-24T20:00:00",
            "swh": 0.41612425446510315
          },
          {
            "lead_hour": 70,
            "time": "2026-04-24T21:00:00",
            "swh": 0.41161322593688965
          },
          {
            "lead_hour": 71,
            "time": "2026-04-24T22:00:00",
            "swh": 0.4081084132194519
          },
          {
            "lead_hour": 72,
            "time": "2026-04-24T23:00:00",
            "swh": 0.4009527564048767
          }
        ]
      },
      "96": {
        "region": "south",
        "horizon": 96,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "TRANSFORMER",
        "window_size": 264,
        "mode_count": 9,
        "mode_scaling": "none",
        "selection_score": 0.0565508821960269,
        "mape_test": 0.0565508821960269,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319\\run_9ea7cec4",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.4716838598251343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.4705288410186767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.4692352414131164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.4681538939476013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.4662626981735229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.4646425247192383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.4631844162940979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.461027443408966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.4588655829429626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.4572232961654663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4530245065689087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.4547399878501892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.457588255405426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.4611548781394958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.4631855487823486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.4649163484573364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.4638850688934326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.4621361494064331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.4612958431243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.4642984867095947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.4664151668548584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 0.467759907245636
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.4611091017723083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.4606444835662842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.4597267806529999
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.4603568315505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.4597667455673218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.4593036472797394
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.4568630456924438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.4547819495201111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.4525273442268371
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.4504917860031128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.4480116367340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.4456843733787536
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.4382474422454834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.4377495050430298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.4380961060523987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 0.4399165511131286
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 0.4409447908401489
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 0.4409692883491516
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.4404164552688598
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.4401207566261291
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.4412751793861389
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.4431201219558716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.4452825784683227
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.4476270675659179
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 0.4483727812767029
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 0.4544509053230285
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 0.4620347619056701
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 0.4721145033836365
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 0.4837591052055359
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 0.4955416917800903
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 0.5092345476150513
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 0.5267396569252014
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 0.5430769324302673
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 0.5542144775390625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 0.5612662434577942
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 0.5677672028541565
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 0.5697646141052246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 0.5781236290931702
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 0.586613118648529
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 0.5951476097106934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 0.6048864126205444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 0.6152254939079285
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 0.6240063309669495
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 0.6320831179618835
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 0.6416168808937073
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 0.6523878574371338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 0.6613942980766296
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.6693934798240662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.6732441782951355
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.6840792298316956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.6976348757743835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.7115260362625122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.7232323288917542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.7316560745239258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.7373917698860168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.7410084009170532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.7422646284103394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 0.7416747808456421
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 0.7622103691101074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 0.7640342116355896
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 0.7619070410728455
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 0.7622839212417603
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 0.7625340819358826
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 0.7619571089744568
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 0.7617935538291931
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 0.7617361545562744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 0.7608227729797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 0.7586444020271301
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 0.7558664679527283
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 0.7530946731567383
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 0.7497645020484924
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.7473559379577637
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.7393346428871155
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.7376340627670288
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.7264214158058167
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.7279175519943237
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 0.7263085246086121
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 0.7284226417541504
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 0.7312718629837036
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 0.7328374981880188
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 0.7418845295906067
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 0.7424753904342651
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 0.746292233467102
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 0.7531160116195679
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 0.7517683506011963
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 0.7485238313674927
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 0.7471719980239868
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 0.7466552257537842
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 0.7407159209251404
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 0.7382753491401672
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 0.7308863997459412
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 0.726757824420929
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.7245931029319763
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.7212255597114563
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.7154154181480408
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.710908830165863
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.7039302587509155
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.7014604806900024
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.690645694732666
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.6849374771118164
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 0.6797261238098145
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 0.6721461415290833
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 0.6627333760261536
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 0.6539039015769958
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 0.6485633254051208
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 0.6350694298744202
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 0.6272993683815002
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 0.6155114769935608
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 0.6063016653060913
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 0.598705530166626
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 0.5870493650436401
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 0.5724031925201416
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 0.5666629672050476
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 0.5541367530822754
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 0.545663595199585
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 0.5348776578903198
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 0.5293120741844177
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 0.5175314545631409
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 0.5092424154281616
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 0.4991207420825958
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 0.48755526542663574
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 0.48353713750839233
          },
          {
            "lead_hour": 49,
            "time": "2026-04-24T00:00:00",
            "swh": 0.4791020452976227
          },
          {
            "lead_hour": 50,
            "time": "2026-04-24T01:00:00",
            "swh": 0.4715568721294403
          },
          {
            "lead_hour": 51,
            "time": "2026-04-24T02:00:00",
            "swh": 0.47012320160865784
          },
          {
            "lead_hour": 52,
            "time": "2026-04-24T03:00:00",
            "swh": 0.46373072266578674
          },
          {
            "lead_hour": 53,
            "time": "2026-04-24T04:00:00",
            "swh": 0.457065612077713
          },
          {
            "lead_hour": 54,
            "time": "2026-04-24T05:00:00",
            "swh": 0.4559568762779236
          },
          {
            "lead_hour": 55,
            "time": "2026-04-24T06:00:00",
            "swh": 0.4476121962070465
          },
          {
            "lead_hour": 56,
            "time": "2026-04-24T07:00:00",
            "swh": 0.44049200415611267
          },
          {
            "lead_hour": 57,
            "time": "2026-04-24T08:00:00",
            "swh": 0.43707942962646484
          },
          {
            "lead_hour": 58,
            "time": "2026-04-24T09:00:00",
            "swh": 0.433053195476532
          },
          {
            "lead_hour": 59,
            "time": "2026-04-24T10:00:00",
            "swh": 0.4343796372413635
          },
          {
            "lead_hour": 60,
            "time": "2026-04-24T11:00:00",
            "swh": 0.4315949082374573
          },
          {
            "lead_hour": 61,
            "time": "2026-04-24T12:00:00",
            "swh": 0.4222835898399353
          },
          {
            "lead_hour": 62,
            "time": "2026-04-24T13:00:00",
            "swh": 0.4182606637477875
          },
          {
            "lead_hour": 63,
            "time": "2026-04-24T14:00:00",
            "swh": 0.4184519052505493
          },
          {
            "lead_hour": 64,
            "time": "2026-04-24T15:00:00",
            "swh": 0.4169621467590332
          },
          {
            "lead_hour": 65,
            "time": "2026-04-24T16:00:00",
            "swh": 0.415160596370697
          },
          {
            "lead_hour": 66,
            "time": "2026-04-24T17:00:00",
            "swh": 0.41658008098602295
          },
          {
            "lead_hour": 67,
            "time": "2026-04-24T18:00:00",
            "swh": 0.4156145751476288
          },
          {
            "lead_hour": 68,
            "time": "2026-04-24T19:00:00",
            "swh": 0.41144049167633057
          },
          {
            "lead_hour": 69,
            "time": "2026-04-24T20:00:00",
            "swh": 0.41230061650276184
          },
          {
            "lead_hour": 70,
            "time": "2026-04-24T21:00:00",
            "swh": 0.4166797995567322
          },
          {
            "lead_hour": 71,
            "time": "2026-04-24T22:00:00",
            "swh": 0.41728150844573975
          },
          {
            "lead_hour": 72,
            "time": "2026-04-24T23:00:00",
            "swh": 0.41924595832824707
          },
          {
            "lead_hour": 73,
            "time": "2026-04-25T00:00:00",
            "swh": 0.4208362102508545
          },
          {
            "lead_hour": 74,
            "time": "2026-04-25T01:00:00",
            "swh": 0.4201175272464752
          },
          {
            "lead_hour": 75,
            "time": "2026-04-25T02:00:00",
            "swh": 0.416958749294281
          },
          {
            "lead_hour": 76,
            "time": "2026-04-25T03:00:00",
            "swh": 0.42542341351509094
          },
          {
            "lead_hour": 77,
            "time": "2026-04-25T04:00:00",
            "swh": 0.431549608707428
          },
          {
            "lead_hour": 78,
            "time": "2026-04-25T05:00:00",
            "swh": 0.43001285195350647
          },
          {
            "lead_hour": 79,
            "time": "2026-04-25T06:00:00",
            "swh": 0.4309192895889282
          },
          {
            "lead_hour": 80,
            "time": "2026-04-25T07:00:00",
            "swh": 0.43474844098091125
          },
          {
            "lead_hour": 81,
            "time": "2026-04-25T08:00:00",
            "swh": 0.4385644793510437
          },
          {
            "lead_hour": 82,
            "time": "2026-04-25T09:00:00",
            "swh": 0.4475167989730835
          },
          {
            "lead_hour": 83,
            "time": "2026-04-25T10:00:00",
            "swh": 0.44590890407562256
          },
          {
            "lead_hour": 84,
            "time": "2026-04-25T11:00:00",
            "swh": 0.45153361558914185
          },
          {
            "lead_hour": 85,
            "time": "2026-04-25T12:00:00",
            "swh": 0.45120513439178467
          },
          {
            "lead_hour": 86,
            "time": "2026-04-25T13:00:00",
            "swh": 0.4533346891403198
          },
          {
            "lead_hour": 87,
            "time": "2026-04-25T14:00:00",
            "swh": 0.45435279607772827
          },
          {
            "lead_hour": 88,
            "time": "2026-04-25T15:00:00",
            "swh": 0.4636538326740265
          },
          {
            "lead_hour": 89,
            "time": "2026-04-25T16:00:00",
            "swh": 0.4616451859474182
          },
          {
            "lead_hour": 90,
            "time": "2026-04-25T17:00:00",
            "swh": 0.4648965895175934
          },
          {
            "lead_hour": 91,
            "time": "2026-04-25T18:00:00",
            "swh": 0.47137364745140076
          },
          {
            "lead_hour": 92,
            "time": "2026-04-25T19:00:00",
            "swh": 0.4706810712814331
          },
          {
            "lead_hour": 93,
            "time": "2026-04-25T20:00:00",
            "swh": 0.47206634283065796
          },
          {
            "lead_hour": 94,
            "time": "2026-04-25T21:00:00",
            "swh": 0.4733526110649109
          },
          {
            "lead_hour": 95,
            "time": "2026-04-25T22:00:00",
            "swh": 0.4745323956012726
          },
          {
            "lead_hour": 96,
            "time": "2026-04-25T23:00:00",
            "swh": 0.4747144877910614
          }
        ]
      }
    },
    "yellow": {
      "48": {
        "region": "yellow",
        "horizon": 48,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "TRANSFORMER",
        "window_size": 116,
        "mode_count": 9,
        "mode_scaling": "none",
        "selection_score": 0.041715322848743505,
        "mape_test": 0.041715322848743505,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214\\run_f5d287da",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.4094280004501343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.4104702472686767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.4108856320381164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.4112691283226013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.4113310575485229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.4101991653442383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.4106941819190979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.412443459033966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.4136995673179626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.4159635305404663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4105440378189087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.4127478003501892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.414863646030426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.4164771437644958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.4180195331573486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.4195061922073364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.4206721782684326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.4230736494064331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.4241864681243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.4254801273345947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.4266202449798584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 0.427964985370636
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.4293708205223083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.4308593273162842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.4321388900279999
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.4330130815505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.4341319799423218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.4348895847797394
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.4417263269424438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.4464811682701111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.4598515629768371
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.4727085828781128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.4734022617340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.4747371077537536
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.4702298641204834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.4748588800430298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.4771586060523987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 0.4809321761131286
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 0.4853783845901489
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 0.4851587414741516
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.4933949708938598
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.5277672410011292
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.5757966637611389
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.6394091844558716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.7465521097183228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.940302848815918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 1.2879724502563477
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 1.6534254550933838
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 1.9261460304260247
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 2.086616516113281
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 2.1075384616851807
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 2.114438056945801
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 2.1330137252807617
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 2.0233216285705566
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 1.835801601409912
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.6513824462890625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.4880239963531494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.3492612838745115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.2252821922302246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.1188950538635254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.0272870063781738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 0.9489073753356934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 0.8812536001205444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 0.8234774470329285
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 0.7812328934669495
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 0.7453643679618835
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 0.7141266465187073
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 0.6826612949371338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 0.6472341418266296
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.6095790266990662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.5650898814201355
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.5310030579566956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.5011016726493835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.4781275987625122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.5100975632667542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.5946931838989258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.6407120823860168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.6516529321670532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.6621865034103394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 0.6779540777206421
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 0.6784701347351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 0.6641806960105896
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 0.6381277441978455
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 0.6177526712417603
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 0.5882176756858826
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 0.5624942183494568
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 0.5332779288291931
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 0.4997732639312744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 0.4707837104797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 0.4461444020271301
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 0.4250559210777282
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 0.4061708450317383
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 0.3867273926734924
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.3679614067077636
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.3509068787097931
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.3470090925693512
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.32761409878730774
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.3480234444141388
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 0.3653874397277832
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 0.39216116070747375
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 0.41360974311828613
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 0.44262412190437317
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 0.45863649249076843
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 0.4690978229045868
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 0.47719451785087585
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 0.4920467138290405
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 0.501516580581665
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 0.5224911570549011
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 0.5450229644775391
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 0.5639622211456299
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 0.5827651619911194
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 0.585512101650238
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 0.5946174263954163
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 0.5850450396537781
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.5760374665260315
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.564333438873291
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.5521190762519836
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.5367258191108704
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.5401434898376465
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.5312696099281311
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.549609899520874
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.5677545666694641
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 0.5785882472991943
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 0.5964933037757874
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 0.6144837141036987
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 0.6342272162437439
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 0.6635575294494629
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 0.6978629231452942
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 0.7396180629730225
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 0.8024063110351562
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 0.8787097930908203
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 0.981285035610199
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.0966105461120605
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.2217586040496826
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.3614317178726196
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.484965443611145
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.598679780960083
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 1.6723724603652954
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 1.726952075958252
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 1.7435163259506226
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 1.7496081590652466
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 1.728564739227295
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 1.6921168565750122
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 1.625264286994934
          }
        ]
      },
      "72": {
        "region": "yellow",
        "horizon": 72,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 160,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.046885039371552126,
        "mape_test": 0.046885039371552126,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626\\run_faa4b156",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.4094280004501343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.4104702472686767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.4108856320381164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.4112691283226013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.4113310575485229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.4101991653442383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.4106941819190979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.412443459033966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.4136995673179626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.4159635305404663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4105440378189087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.4127478003501892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.414863646030426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.4164771437644958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.4180195331573486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.4195061922073364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.4206721782684326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.4230736494064331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.4241864681243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.4254801273345947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.4266202449798584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 0.427964985370636
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.4293708205223083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.4308593273162842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.4321388900279999
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.4330130815505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.4341319799423218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.4348895847797394
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.4417263269424438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.4464811682701111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.4598515629768371
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.4727085828781128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.4734022617340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.4747371077537536
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.4702298641204834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.4748588800430298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.4771586060523987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 0.4809321761131286
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 0.4853783845901489
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 0.4851587414741516
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.4933949708938598
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.5277672410011292
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.5757966637611389
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.6394091844558716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.7465521097183228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.940302848815918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 1.2879724502563477
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 1.6534254550933838
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 1.9261460304260247
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 2.086616516113281
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 2.1075384616851807
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 2.114438056945801
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 2.1330137252807617
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 2.0233216285705566
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 1.835801601409912
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.6513824462890625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.4880239963531494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.3492612838745115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.2252821922302246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.1188950538635254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.0272870063781738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 0.9489073753356934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 0.8812536001205444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 0.8234774470329285
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 0.7812328934669495
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 0.7453643679618835
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 0.7141266465187073
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 0.6826612949371338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 0.6472341418266296
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.6095790266990662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.5650898814201355
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.5310030579566956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.5011016726493835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.4781275987625122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.5100975632667542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.5946931838989258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.6407120823860168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.6516529321670532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.6621865034103394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 0.6779540777206421
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 0.6784701347351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 0.6641806960105896
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 0.6381277441978455
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 0.6177526712417603
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 0.5882176756858826
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 0.5624942183494568
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 0.5332779288291931
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 0.4997732639312744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 0.4707837104797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 0.4461444020271301
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 0.4250559210777282
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 0.4061708450317383
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 0.3867273926734924
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.3679614067077636
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.3509068787097931
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.3470090925693512
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.3470091223716736
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.32900118827819824
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 0.32461610436439514
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 0.33792978525161743
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 0.3611125648021698
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 0.39536476135253906
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 0.4309420585632324
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 0.4758096933364868
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 0.5117812752723694
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 0.5502915382385254
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 0.5904767513275146
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 0.6183720827102661
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 0.6342620849609375
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 0.6305043697357178
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 0.6299427151679993
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 0.6295207738876343
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 0.6226451396942139
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 0.6113714575767517
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.6021919846534729
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.5855743288993835
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.56180340051651
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.5210211277008057
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.48981213569641113
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.5093311071395874
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.5366894006729126
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.5802775025367737
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 0.630608081817627
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 0.6793643236160278
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 0.7186721563339233
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 0.7422437071800232
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 0.7569615244865417
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 0.7638317346572876
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 0.7863008379936218
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 0.8216512799263
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 0.8931370377540588
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 0.9747185111045837
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.090328574180603
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.2525525093078613
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.4569021463394165
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.6607062816619873
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.8156607151031494
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 1.919434905052185
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 1.9810285568237305
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 1.9762295484542847
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 1.9260334968566895
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 1.8384582996368408
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 1.727576494216919
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 1.58273446559906
          },
          {
            "lead_hour": 49,
            "time": "2026-04-24T00:00:00",
            "swh": 1.4455766677856445
          },
          {
            "lead_hour": 50,
            "time": "2026-04-24T01:00:00",
            "swh": 1.3149844408035278
          },
          {
            "lead_hour": 51,
            "time": "2026-04-24T02:00:00",
            "swh": 1.175503134727478
          },
          {
            "lead_hour": 52,
            "time": "2026-04-24T03:00:00",
            "swh": 1.0372192859649658
          },
          {
            "lead_hour": 53,
            "time": "2026-04-24T04:00:00",
            "swh": 0.9065687656402588
          },
          {
            "lead_hour": 54,
            "time": "2026-04-24T05:00:00",
            "swh": 0.7781563997268677
          },
          {
            "lead_hour": 55,
            "time": "2026-04-24T06:00:00",
            "swh": 0.6637206673622131
          },
          {
            "lead_hour": 56,
            "time": "2026-04-24T07:00:00",
            "swh": 0.5710309147834778
          },
          {
            "lead_hour": 57,
            "time": "2026-04-24T08:00:00",
            "swh": 0.5101460218429565
          },
          {
            "lead_hour": 58,
            "time": "2026-04-24T09:00:00",
            "swh": 0.45523831248283386
          },
          {
            "lead_hour": 59,
            "time": "2026-04-24T10:00:00",
            "swh": 0.4186965227127075
          },
          {
            "lead_hour": 60,
            "time": "2026-04-24T11:00:00",
            "swh": 0.38993868231773376
          },
          {
            "lead_hour": 61,
            "time": "2026-04-24T12:00:00",
            "swh": 0.37306636571884155
          },
          {
            "lead_hour": 62,
            "time": "2026-04-24T13:00:00",
            "swh": 0.361404687166214
          },
          {
            "lead_hour": 63,
            "time": "2026-04-24T14:00:00",
            "swh": 0.3534429371356964
          },
          {
            "lead_hour": 64,
            "time": "2026-04-24T15:00:00",
            "swh": 0.35456815361976624
          },
          {
            "lead_hour": 65,
            "time": "2026-04-24T16:00:00",
            "swh": 0.3547983765602112
          },
          {
            "lead_hour": 66,
            "time": "2026-04-24T17:00:00",
            "swh": 0.36291036009788513
          },
          {
            "lead_hour": 67,
            "time": "2026-04-24T18:00:00",
            "swh": 0.3810424208641052
          },
          {
            "lead_hour": 68,
            "time": "2026-04-24T19:00:00",
            "swh": 0.4160088300704956
          },
          {
            "lead_hour": 69,
            "time": "2026-04-24T20:00:00",
            "swh": 0.45208942890167236
          },
          {
            "lead_hour": 70,
            "time": "2026-04-24T21:00:00",
            "swh": 0.47874999046325684
          },
          {
            "lead_hour": 71,
            "time": "2026-04-24T22:00:00",
            "swh": 0.5205184817314148
          },
          {
            "lead_hour": 72,
            "time": "2026-04-24T23:00:00",
            "swh": 0.5780481100082397
          }
        ]
      },
      "96": {
        "region": "yellow",
        "horizon": 96,
        "issued_at": "2026-04-21T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 192,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.05653362660475795,
        "mape_test": 0.05653362660475795,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021\\run_abae115b",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-18T00:00:00",
            "swh": 0.4094280004501343
          },
          {
            "lead_hour": -94,
            "time": "2026-04-18T01:00:00",
            "swh": 0.4104702472686767
          },
          {
            "lead_hour": -93,
            "time": "2026-04-18T02:00:00",
            "swh": 0.4108856320381164
          },
          {
            "lead_hour": -92,
            "time": "2026-04-18T03:00:00",
            "swh": 0.4112691283226013
          },
          {
            "lead_hour": -91,
            "time": "2026-04-18T04:00:00",
            "swh": 0.4113310575485229
          },
          {
            "lead_hour": -90,
            "time": "2026-04-18T05:00:00",
            "swh": 0.4101991653442383
          },
          {
            "lead_hour": -89,
            "time": "2026-04-18T06:00:00",
            "swh": 0.4106941819190979
          },
          {
            "lead_hour": -88,
            "time": "2026-04-18T07:00:00",
            "swh": 0.412443459033966
          },
          {
            "lead_hour": -87,
            "time": "2026-04-18T08:00:00",
            "swh": 0.4136995673179626
          },
          {
            "lead_hour": -86,
            "time": "2026-04-18T09:00:00",
            "swh": 0.4159635305404663
          },
          {
            "lead_hour": -85,
            "time": "2026-04-18T10:00:00",
            "swh": 0.4105440378189087
          },
          {
            "lead_hour": -84,
            "time": "2026-04-18T11:00:00",
            "swh": 0.4127478003501892
          },
          {
            "lead_hour": -83,
            "time": "2026-04-18T12:00:00",
            "swh": 0.414863646030426
          },
          {
            "lead_hour": -82,
            "time": "2026-04-18T13:00:00",
            "swh": 0.4164771437644958
          },
          {
            "lead_hour": -81,
            "time": "2026-04-18T14:00:00",
            "swh": 0.4180195331573486
          },
          {
            "lead_hour": -80,
            "time": "2026-04-18T15:00:00",
            "swh": 0.4195061922073364
          },
          {
            "lead_hour": -79,
            "time": "2026-04-18T16:00:00",
            "swh": 0.4206721782684326
          },
          {
            "lead_hour": -78,
            "time": "2026-04-18T17:00:00",
            "swh": 0.4230736494064331
          },
          {
            "lead_hour": -77,
            "time": "2026-04-18T18:00:00",
            "swh": 0.4241864681243896
          },
          {
            "lead_hour": -76,
            "time": "2026-04-18T19:00:00",
            "swh": 0.4254801273345947
          },
          {
            "lead_hour": -75,
            "time": "2026-04-18T20:00:00",
            "swh": 0.4266202449798584
          },
          {
            "lead_hour": -74,
            "time": "2026-04-18T21:00:00",
            "swh": 0.427964985370636
          },
          {
            "lead_hour": -73,
            "time": "2026-04-18T22:00:00",
            "swh": 0.4293708205223083
          },
          {
            "lead_hour": -72,
            "time": "2026-04-18T23:00:00",
            "swh": 0.4308593273162842
          },
          {
            "lead_hour": -71,
            "time": "2026-04-19T00:00:00",
            "swh": 0.4321388900279999
          },
          {
            "lead_hour": -70,
            "time": "2026-04-19T01:00:00",
            "swh": 0.4330130815505981
          },
          {
            "lead_hour": -69,
            "time": "2026-04-19T02:00:00",
            "swh": 0.4341319799423218
          },
          {
            "lead_hour": -68,
            "time": "2026-04-19T03:00:00",
            "swh": 0.4348895847797394
          },
          {
            "lead_hour": -67,
            "time": "2026-04-19T04:00:00",
            "swh": 0.4417263269424438
          },
          {
            "lead_hour": -66,
            "time": "2026-04-19T05:00:00",
            "swh": 0.4464811682701111
          },
          {
            "lead_hour": -65,
            "time": "2026-04-19T06:00:00",
            "swh": 0.4598515629768371
          },
          {
            "lead_hour": -64,
            "time": "2026-04-19T07:00:00",
            "swh": 0.4727085828781128
          },
          {
            "lead_hour": -63,
            "time": "2026-04-19T08:00:00",
            "swh": 0.4734022617340088
          },
          {
            "lead_hour": -62,
            "time": "2026-04-19T09:00:00",
            "swh": 0.4747371077537536
          },
          {
            "lead_hour": -61,
            "time": "2026-04-19T10:00:00",
            "swh": 0.4702298641204834
          },
          {
            "lead_hour": -60,
            "time": "2026-04-19T11:00:00",
            "swh": 0.4748588800430298
          },
          {
            "lead_hour": -59,
            "time": "2026-04-19T12:00:00",
            "swh": 0.4771586060523987
          },
          {
            "lead_hour": -58,
            "time": "2026-04-19T13:00:00",
            "swh": 0.4809321761131286
          },
          {
            "lead_hour": -57,
            "time": "2026-04-19T14:00:00",
            "swh": 0.4853783845901489
          },
          {
            "lead_hour": -56,
            "time": "2026-04-19T15:00:00",
            "swh": 0.4851587414741516
          },
          {
            "lead_hour": -55,
            "time": "2026-04-19T16:00:00",
            "swh": 0.4933949708938598
          },
          {
            "lead_hour": -54,
            "time": "2026-04-19T17:00:00",
            "swh": 0.5277672410011292
          },
          {
            "lead_hour": -53,
            "time": "2026-04-19T18:00:00",
            "swh": 0.5757966637611389
          },
          {
            "lead_hour": -52,
            "time": "2026-04-19T19:00:00",
            "swh": 0.6394091844558716
          },
          {
            "lead_hour": -51,
            "time": "2026-04-19T20:00:00",
            "swh": 0.7465521097183228
          },
          {
            "lead_hour": -50,
            "time": "2026-04-19T21:00:00",
            "swh": 0.940302848815918
          },
          {
            "lead_hour": -49,
            "time": "2026-04-19T22:00:00",
            "swh": 1.2879724502563477
          },
          {
            "lead_hour": -48,
            "time": "2026-04-19T23:00:00",
            "swh": 1.6534254550933838
          },
          {
            "lead_hour": -47,
            "time": "2026-04-20T00:00:00",
            "swh": 1.9261460304260247
          },
          {
            "lead_hour": -46,
            "time": "2026-04-20T01:00:00",
            "swh": 2.086616516113281
          },
          {
            "lead_hour": -45,
            "time": "2026-04-20T02:00:00",
            "swh": 2.1075384616851807
          },
          {
            "lead_hour": -44,
            "time": "2026-04-20T03:00:00",
            "swh": 2.114438056945801
          },
          {
            "lead_hour": -43,
            "time": "2026-04-20T04:00:00",
            "swh": 2.1330137252807617
          },
          {
            "lead_hour": -42,
            "time": "2026-04-20T05:00:00",
            "swh": 2.0233216285705566
          },
          {
            "lead_hour": -41,
            "time": "2026-04-20T06:00:00",
            "swh": 1.835801601409912
          },
          {
            "lead_hour": -40,
            "time": "2026-04-20T07:00:00",
            "swh": 1.6513824462890625
          },
          {
            "lead_hour": -39,
            "time": "2026-04-20T08:00:00",
            "swh": 1.4880239963531494
          },
          {
            "lead_hour": -38,
            "time": "2026-04-20T09:00:00",
            "swh": 1.3492612838745115
          },
          {
            "lead_hour": -37,
            "time": "2026-04-20T10:00:00",
            "swh": 1.2252821922302246
          },
          {
            "lead_hour": -36,
            "time": "2026-04-20T11:00:00",
            "swh": 1.1188950538635254
          },
          {
            "lead_hour": -35,
            "time": "2026-04-20T12:00:00",
            "swh": 1.0272870063781738
          },
          {
            "lead_hour": -34,
            "time": "2026-04-20T13:00:00",
            "swh": 0.9489073753356934
          },
          {
            "lead_hour": -33,
            "time": "2026-04-20T14:00:00",
            "swh": 0.8812536001205444
          },
          {
            "lead_hour": -32,
            "time": "2026-04-20T15:00:00",
            "swh": 0.8234774470329285
          },
          {
            "lead_hour": -31,
            "time": "2026-04-20T16:00:00",
            "swh": 0.7812328934669495
          },
          {
            "lead_hour": -30,
            "time": "2026-04-20T17:00:00",
            "swh": 0.7453643679618835
          },
          {
            "lead_hour": -29,
            "time": "2026-04-20T18:00:00",
            "swh": 0.7141266465187073
          },
          {
            "lead_hour": -28,
            "time": "2026-04-20T19:00:00",
            "swh": 0.6826612949371338
          },
          {
            "lead_hour": -27,
            "time": "2026-04-20T20:00:00",
            "swh": 0.6472341418266296
          },
          {
            "lead_hour": -26,
            "time": "2026-04-20T21:00:00",
            "swh": 0.6095790266990662
          },
          {
            "lead_hour": -25,
            "time": "2026-04-20T22:00:00",
            "swh": 0.5650898814201355
          },
          {
            "lead_hour": -24,
            "time": "2026-04-20T23:00:00",
            "swh": 0.5310030579566956
          },
          {
            "lead_hour": -23,
            "time": "2026-04-21T00:00:00",
            "swh": 0.5011016726493835
          },
          {
            "lead_hour": -22,
            "time": "2026-04-21T01:00:00",
            "swh": 0.4781275987625122
          },
          {
            "lead_hour": -21,
            "time": "2026-04-21T02:00:00",
            "swh": 0.5100975632667542
          },
          {
            "lead_hour": -20,
            "time": "2026-04-21T03:00:00",
            "swh": 0.5946931838989258
          },
          {
            "lead_hour": -19,
            "time": "2026-04-21T04:00:00",
            "swh": 0.6407120823860168
          },
          {
            "lead_hour": -18,
            "time": "2026-04-21T05:00:00",
            "swh": 0.6516529321670532
          },
          {
            "lead_hour": -17,
            "time": "2026-04-21T06:00:00",
            "swh": 0.6621865034103394
          },
          {
            "lead_hour": -16,
            "time": "2026-04-21T07:00:00",
            "swh": 0.6779540777206421
          },
          {
            "lead_hour": -15,
            "time": "2026-04-21T08:00:00",
            "swh": 0.6784701347351074
          },
          {
            "lead_hour": -14,
            "time": "2026-04-21T09:00:00",
            "swh": 0.6641806960105896
          },
          {
            "lead_hour": -13,
            "time": "2026-04-21T10:00:00",
            "swh": 0.6381277441978455
          },
          {
            "lead_hour": -12,
            "time": "2026-04-21T11:00:00",
            "swh": 0.6177526712417603
          },
          {
            "lead_hour": -11,
            "time": "2026-04-21T12:00:00",
            "swh": 0.5882176756858826
          },
          {
            "lead_hour": -10,
            "time": "2026-04-21T13:00:00",
            "swh": 0.5624942183494568
          },
          {
            "lead_hour": -9,
            "time": "2026-04-21T14:00:00",
            "swh": 0.5332779288291931
          },
          {
            "lead_hour": -8,
            "time": "2026-04-21T15:00:00",
            "swh": 0.4997732639312744
          },
          {
            "lead_hour": -7,
            "time": "2026-04-21T16:00:00",
            "swh": 0.4707837104797363
          },
          {
            "lead_hour": -6,
            "time": "2026-04-21T17:00:00",
            "swh": 0.4461444020271301
          },
          {
            "lead_hour": -5,
            "time": "2026-04-21T18:00:00",
            "swh": 0.4250559210777282
          },
          {
            "lead_hour": -4,
            "time": "2026-04-21T19:00:00",
            "swh": 0.4061708450317383
          },
          {
            "lead_hour": -3,
            "time": "2026-04-21T20:00:00",
            "swh": 0.3867273926734924
          },
          {
            "lead_hour": -2,
            "time": "2026-04-21T21:00:00",
            "swh": 0.3679614067077636
          },
          {
            "lead_hour": -1,
            "time": "2026-04-21T22:00:00",
            "swh": 0.3509068787097931
          },
          {
            "lead_hour": 0,
            "time": "2026-04-21T23:00:00",
            "swh": 0.3470090925693512
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-04-22T00:00:00",
            "swh": 0.3803858458995819
          },
          {
            "lead_hour": 2,
            "time": "2026-04-22T01:00:00",
            "swh": 0.3972231149673462
          },
          {
            "lead_hour": 3,
            "time": "2026-04-22T02:00:00",
            "swh": 0.41674038767814636
          },
          {
            "lead_hour": 4,
            "time": "2026-04-22T03:00:00",
            "swh": 0.42886626720428467
          },
          {
            "lead_hour": 5,
            "time": "2026-04-22T04:00:00",
            "swh": 0.43302151560783386
          },
          {
            "lead_hour": 6,
            "time": "2026-04-22T05:00:00",
            "swh": 0.4571837782859802
          },
          {
            "lead_hour": 7,
            "time": "2026-04-22T06:00:00",
            "swh": 0.48689550161361694
          },
          {
            "lead_hour": 8,
            "time": "2026-04-22T07:00:00",
            "swh": 0.5113442540168762
          },
          {
            "lead_hour": 9,
            "time": "2026-04-22T08:00:00",
            "swh": 0.5290091037750244
          },
          {
            "lead_hour": 10,
            "time": "2026-04-22T09:00:00",
            "swh": 0.5358781814575195
          },
          {
            "lead_hour": 11,
            "time": "2026-04-22T10:00:00",
            "swh": 0.5381578207015991
          },
          {
            "lead_hour": 12,
            "time": "2026-04-22T11:00:00",
            "swh": 0.5444436073303223
          },
          {
            "lead_hour": 13,
            "time": "2026-04-22T12:00:00",
            "swh": 0.563414454460144
          },
          {
            "lead_hour": 14,
            "time": "2026-04-22T13:00:00",
            "swh": 0.6007959246635437
          },
          {
            "lead_hour": 15,
            "time": "2026-04-22T14:00:00",
            "swh": 0.6363056898117065
          },
          {
            "lead_hour": 16,
            "time": "2026-04-22T15:00:00",
            "swh": 0.6699410676956177
          },
          {
            "lead_hour": 17,
            "time": "2026-04-22T16:00:00",
            "swh": 0.7088255882263184
          },
          {
            "lead_hour": 18,
            "time": "2026-04-22T17:00:00",
            "swh": 0.7394896745681763
          },
          {
            "lead_hour": 19,
            "time": "2026-04-22T18:00:00",
            "swh": 0.7337180972099304
          },
          {
            "lead_hour": 20,
            "time": "2026-04-22T19:00:00",
            "swh": 0.7251066565513611
          },
          {
            "lead_hour": 21,
            "time": "2026-04-22T20:00:00",
            "swh": 0.6941799521446228
          },
          {
            "lead_hour": 22,
            "time": "2026-04-22T21:00:00",
            "swh": 0.6556174755096436
          },
          {
            "lead_hour": 23,
            "time": "2026-04-22T22:00:00",
            "swh": 0.6227866411209106
          },
          {
            "lead_hour": 24,
            "time": "2026-04-22T23:00:00",
            "swh": 0.6022963523864746
          },
          {
            "lead_hour": 25,
            "time": "2026-04-23T00:00:00",
            "swh": 0.594592273235321
          },
          {
            "lead_hour": 26,
            "time": "2026-04-23T01:00:00",
            "swh": 0.6031929850578308
          },
          {
            "lead_hour": 27,
            "time": "2026-04-23T02:00:00",
            "swh": 0.6284319162368774
          },
          {
            "lead_hour": 28,
            "time": "2026-04-23T03:00:00",
            "swh": 0.6718679070472717
          },
          {
            "lead_hour": 29,
            "time": "2026-04-23T04:00:00",
            "swh": 0.7142912149429321
          },
          {
            "lead_hour": 30,
            "time": "2026-04-23T05:00:00",
            "swh": 0.7360326051712036
          },
          {
            "lead_hour": 31,
            "time": "2026-04-23T06:00:00",
            "swh": 0.7505288124084473
          },
          {
            "lead_hour": 32,
            "time": "2026-04-23T07:00:00",
            "swh": 0.7588729858398438
          },
          {
            "lead_hour": 33,
            "time": "2026-04-23T08:00:00",
            "swh": 0.7744243144989014
          },
          {
            "lead_hour": 34,
            "time": "2026-04-23T09:00:00",
            "swh": 0.8118289709091187
          },
          {
            "lead_hour": 35,
            "time": "2026-04-23T10:00:00",
            "swh": 0.8847699165344238
          },
          {
            "lead_hour": 36,
            "time": "2026-04-23T11:00:00",
            "swh": 0.9974260926246643
          },
          {
            "lead_hour": 37,
            "time": "2026-04-23T12:00:00",
            "swh": 1.127289891242981
          },
          {
            "lead_hour": 38,
            "time": "2026-04-23T13:00:00",
            "swh": 1.2784229516983032
          },
          {
            "lead_hour": 39,
            "time": "2026-04-23T14:00:00",
            "swh": 1.4270689487457275
          },
          {
            "lead_hour": 40,
            "time": "2026-04-23T15:00:00",
            "swh": 1.5864824056625366
          },
          {
            "lead_hour": 41,
            "time": "2026-04-23T16:00:00",
            "swh": 1.742317795753479
          },
          {
            "lead_hour": 42,
            "time": "2026-04-23T17:00:00",
            "swh": 1.8680081367492676
          },
          {
            "lead_hour": 43,
            "time": "2026-04-23T18:00:00",
            "swh": 1.957120418548584
          },
          {
            "lead_hour": 44,
            "time": "2026-04-23T19:00:00",
            "swh": 1.9895740747451782
          },
          {
            "lead_hour": 45,
            "time": "2026-04-23T20:00:00",
            "swh": 1.9737776517868042
          },
          {
            "lead_hour": 46,
            "time": "2026-04-23T21:00:00",
            "swh": 1.9146043062210083
          },
          {
            "lead_hour": 47,
            "time": "2026-04-23T22:00:00",
            "swh": 1.810791015625
          },
          {
            "lead_hour": 48,
            "time": "2026-04-23T23:00:00",
            "swh": 1.6665027141571045
          },
          {
            "lead_hour": 49,
            "time": "2026-04-24T00:00:00",
            "swh": 1.5048341751098633
          },
          {
            "lead_hour": 50,
            "time": "2026-04-24T01:00:00",
            "swh": 1.334821343421936
          },
          {
            "lead_hour": 51,
            "time": "2026-04-24T02:00:00",
            "swh": 1.1783349514007568
          },
          {
            "lead_hour": 52,
            "time": "2026-04-24T03:00:00",
            "swh": 1.0473109483718872
          },
          {
            "lead_hour": 53,
            "time": "2026-04-24T04:00:00",
            "swh": 0.9405680894851685
          },
          {
            "lead_hour": 54,
            "time": "2026-04-24T05:00:00",
            "swh": 0.8431140184402466
          },
          {
            "lead_hour": 55,
            "time": "2026-04-24T06:00:00",
            "swh": 0.7402846217155457
          },
          {
            "lead_hour": 56,
            "time": "2026-04-24T07:00:00",
            "swh": 0.6551209092140198
          },
          {
            "lead_hour": 57,
            "time": "2026-04-24T08:00:00",
            "swh": 0.5926414132118225
          },
          {
            "lead_hour": 58,
            "time": "2026-04-24T09:00:00",
            "swh": 0.5527764558792114
          },
          {
            "lead_hour": 59,
            "time": "2026-04-24T10:00:00",
            "swh": 0.5380078554153442
          },
          {
            "lead_hour": 60,
            "time": "2026-04-24T11:00:00",
            "swh": 0.5199376344680786
          },
          {
            "lead_hour": 61,
            "time": "2026-04-24T12:00:00",
            "swh": 0.49869078397750854
          },
          {
            "lead_hour": 62,
            "time": "2026-04-24T13:00:00",
            "swh": 0.47038206458091736
          },
          {
            "lead_hour": 63,
            "time": "2026-04-24T14:00:00",
            "swh": 0.45111194252967834
          },
          {
            "lead_hour": 64,
            "time": "2026-04-24T15:00:00",
            "swh": 0.4484672546386719
          },
          {
            "lead_hour": 65,
            "time": "2026-04-24T16:00:00",
            "swh": 0.43383800983428955
          },
          {
            "lead_hour": 66,
            "time": "2026-04-24T17:00:00",
            "swh": 0.41732221841812134
          },
          {
            "lead_hour": 67,
            "time": "2026-04-24T18:00:00",
            "swh": 0.414896696805954
          },
          {
            "lead_hour": 68,
            "time": "2026-04-24T19:00:00",
            "swh": 0.41999056935310364
          },
          {
            "lead_hour": 69,
            "time": "2026-04-24T20:00:00",
            "swh": 0.4303867220878601
          },
          {
            "lead_hour": 70,
            "time": "2026-04-24T21:00:00",
            "swh": 0.44368574023246765
          },
          {
            "lead_hour": 71,
            "time": "2026-04-24T22:00:00",
            "swh": 0.4564105272293091
          },
          {
            "lead_hour": 72,
            "time": "2026-04-24T23:00:00",
            "swh": 0.4636896848678589
          },
          {
            "lead_hour": 73,
            "time": "2026-04-25T00:00:00",
            "swh": 0.4649120271205902
          },
          {
            "lead_hour": 74,
            "time": "2026-04-25T01:00:00",
            "swh": 0.4606515169143677
          },
          {
            "lead_hour": 75,
            "time": "2026-04-25T02:00:00",
            "swh": 0.4611949324607849
          },
          {
            "lead_hour": 76,
            "time": "2026-04-25T03:00:00",
            "swh": 0.45321935415267944
          },
          {
            "lead_hour": 77,
            "time": "2026-04-25T04:00:00",
            "swh": 0.455485463142395
          },
          {
            "lead_hour": 78,
            "time": "2026-04-25T05:00:00",
            "swh": 0.4632330536842346
          },
          {
            "lead_hour": 79,
            "time": "2026-04-25T06:00:00",
            "swh": 0.4531400799751282
          },
          {
            "lead_hour": 80,
            "time": "2026-04-25T07:00:00",
            "swh": 0.4522104859352112
          },
          {
            "lead_hour": 81,
            "time": "2026-04-25T08:00:00",
            "swh": 0.45504626631736755
          },
          {
            "lead_hour": 82,
            "time": "2026-04-25T09:00:00",
            "swh": 0.4594476819038391
          },
          {
            "lead_hour": 83,
            "time": "2026-04-25T10:00:00",
            "swh": 0.45084935426712036
          },
          {
            "lead_hour": 84,
            "time": "2026-04-25T11:00:00",
            "swh": 0.4477715790271759
          },
          {
            "lead_hour": 85,
            "time": "2026-04-25T12:00:00",
            "swh": 0.43185171484947205
          },
          {
            "lead_hour": 86,
            "time": "2026-04-25T13:00:00",
            "swh": 0.41498464345932007
          },
          {
            "lead_hour": 87,
            "time": "2026-04-25T14:00:00",
            "swh": 0.3934401273727417
          },
          {
            "lead_hour": 88,
            "time": "2026-04-25T15:00:00",
            "swh": 0.3856414556503296
          },
          {
            "lead_hour": 89,
            "time": "2026-04-25T16:00:00",
            "swh": 0.384148508310318
          },
          {
            "lead_hour": 90,
            "time": "2026-04-25T17:00:00",
            "swh": 0.38984519243240356
          },
          {
            "lead_hour": 91,
            "time": "2026-04-25T18:00:00",
            "swh": 0.3901554346084595
          },
          {
            "lead_hour": 92,
            "time": "2026-04-25T19:00:00",
            "swh": 0.3963010907173157
          },
          {
            "lead_hour": 93,
            "time": "2026-04-25T20:00:00",
            "swh": 0.39826932549476624
          },
          {
            "lead_hour": 94,
            "time": "2026-04-25T21:00:00",
            "swh": 0.40119466185569763
          },
          {
            "lead_hour": 95,
            "time": "2026-04-25T22:00:00",
            "swh": 0.39626529812812805
          },
          {
            "lead_hour": 96,
            "time": "2026-04-25T23:00:00",
            "swh": 0.3882138729095459
          }
        ]
      }
    }
  }
};
